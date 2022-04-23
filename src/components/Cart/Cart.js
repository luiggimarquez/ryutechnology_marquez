import "./cart.scss"
import { useContext } from "react";
import Context from '../../context/CartContext';
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, query, where, documentId, writeBatch} from "firebase/firestore"
import { firestoreDb }from "../../services/index"
import UserContext from '../../context/UsersContext';


const Cart = () =>{

    const[loading, setLoading] = useState(true);
    const {cart, clearItem, eliminarItem, removeOutOfStock} = useContext(Context)
    const { user, getOrderNumber } = useContext(UserContext)

    let subTotal = 0;

    cart.forEach(elemento =>{

        subTotal = subTotal + (elemento.agregados*elemento.precio)
    })

    const createOrder = () => {
        
        setLoading(true)
        const objOrder  = {

            buyer: {

                name: user.displayName,
                phone: user.photoURL,
                email: user.email,
                uid: user.uid

            },
            items: cart,
            date: new Date().toLocaleDateString("es-ES",{ year: 'numeric', month: 'long', day: 'numeric' }),
            total: (subTotal*0.21 + subTotal)
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []
        const ids = cart.map(item => item.id)
        
        const collectionRef = collection(firestoreDb, "items")

        getDocs(query(collectionRef, where(documentId(),"in", ids )))
        .then(response => {

            response.docs.forEach(doc => {
                   
                const dataDoc = doc.data()
                const prodAgregados = objOrder.items.find(prod => prod.id === doc.id).agregados

                if(dataDoc.cantidad >= prodAgregados){

                    batch.update(doc.ref, {cantidad : dataDoc.cantidad - prodAgregados})

                }else{

                    outOfStock.push({id:doc.id, dataDoc})
                }
            })

        }).then(() =>{

            if(outOfStock.length === 0){
                    
                const collectionRef = collection(firestoreDb,"orders")
                return addDoc(collectionRef, objOrder)

            }else{

                return Promise.reject({name: "outOfStockError", products: outOfStock})
            }    

        }).then(( { id }) =>{

            batch.commit()
            clearItem()
            getOrderNumber(id)
            endOrder();
                
            const Toast = Swal.mixin({

                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 6000,
                timerProgressBar: true,
                didOpen: (toast) => {
        
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            }) 
            Toast.fire({
        
                icon: 'success',
                title: `Tu orden de compra es: ${id}`
            })
               
        }).catch((error) =>{

            if(error && (error.name === "outOfStockError") && (error.products.length>0)){

                const stringProducts = error.products.map(prod => prod.dataDoc.nombre).join(', ')
                const ids = outOfStock.map(prod => prod.id)
                removeOutOfStock(ids)

                const Toast = Swal.mixin({

                    toast: true,
                    position: 'center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
            
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                }) 
                Toast.fire({
            
                    icon: 'error',
                    title: `cantidades insuficientes de: ${stringProducts}`
                })
                     
            }else{

                console.log(error)
            }

        }).finally(()=>{

            setLoading(false)
        })
        
    }

    useEffect(() => {

        let a = false

        setTimeout(() => {

            setLoading(a)
        },1500)

        return (() => {

            setLoading([])
        })

    },[])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/formulario')
    }
    const endOrder = () =>{
        navigate('/purchaseorder')
    }

    if(loading){

        return (

            <div className="loaderContainer">
                <div className="loader"></div>
                <p>Loading info ...</p>
            </div>
        )
    }

    return(

        <div className="contenedorGeneral">
            <h2 className="cartTitle">Cart</h2>
            {
            (cart.length !== 0 ) ?
            <><div className="titlesContainer"><p>Producto</p> <p>Cantidad</p><p>Precio USD</p><p>Sub-monto  USD</p><p>Accion</p></div>
            <div className="articleContainer">

                <div className="columnasItem">{cart.map(elemento => <p key={elemento.id}>{elemento.nombre}</p>)}</div>
                <div className="columnasItem">{cart.map(elemento =><p key={elemento.id}>{elemento.agregados}</p>)}</div>
                <div className="columnasItem">{cart.map(elemento => <p key={elemento.id}>{elemento.precio}</p>)}</div>
                <div className="columnasItem">{cart.map(elemento => <p key={elemento.id}>{elemento.agregados*elemento.precio}</p>)}</div>
                <div className="columnasItem"> {cart.map(elemento =><button key={elemento.id} className="buttonCart" onClick={() => eliminarItem(elemento.id)}>Eliminar</button> )}</div>

            </div> 
            <div className="montoPago">Subtotal a pagar: {subTotal} USD</div> <div className="montoPago">Total a pagar: {(subTotal*0.21 + subTotal)} USD</div>
            <button className="borrarCarrito" onClick={() => clearItem()}> Borrar carrito </button> <button className="borrarCarrito" onClick={() => (user.length !== 0)?createOrder():handleClick() }>Procesar compra</button></> : <div className="carritoVacio"><img src="/img/empty_cart.png" alt="imagen carro vacío"/><h3>El carrito está vacio</h3><Link to="/"><button className="borrarCarrito">Volver a Home</button></Link></div>
            }
            
        </div>
    )
}

export default Cart