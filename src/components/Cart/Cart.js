import "./cart.scss"
import { useContext } from "react";
import Context from '../../context/CartContext';
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import UserContext from '../../context/UsersContext';
import  NotificationContext  from "../../context/NotificationContext";
import { createOrderAndUpdateStock } from "../../services/Firestore";

const Cart = () =>{

    const[loading, setLoading] = useState(true);
    const {cart, clearItem, eliminarItem, removeOutOfStock, getItemSubTotal, getSubTotal, getTotal} = useContext(Context)
    const { user, getOrderNumber } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)

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
            total: getTotal()
        }

        createOrderAndUpdateStock(cart, objOrder).then( id =>{

            clearItem()
            getOrderNumber(id)
            endOrder();
            setNotification('success',`OC generada satisfactoriamente. Tu orden de compra es: ${id}`, 6000)
               
        }).catch((error) =>{

            if(error && (error.name === "outOfStockError") && (error.products.length>0)){

                const stringProducts = error.products.map(prod => prod.dataDoc.nombre).join(', ')
                const ids = error.products.map(prod => prod.id)
                removeOutOfStock(ids)
                setNotification('error', `cantidades insuficientes de: ${stringProducts}`, 3000)
                     
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
                <div className="columnasItem">{cart.map(elemento => <p key={elemento.id}>{ getItemSubTotal(elemento.precio,elemento.agregados)}</p>)}</div>
                <div className="columnasItem"> {cart.map(elemento =><button key={elemento.id} className="buttonCart" onClick={() => eliminarItem(elemento.id)}>Eliminar</button> )}</div>

            </div> 
            <div className="montoPago">Subtotal a pagar: {getSubTotal()} USD</div> <div className="montoPago">Total a pagar: {getTotal()} USD</div>
            <button className="borrarCarrito" onClick={() => clearItem()}> Borrar carrito </button> <button className="borrarCarrito" onClick={() => (user.length !== 0)?createOrder():handleClick() }>Procesar compra</button></> : <div className="carritoVacio"><img src="/img/empty_cart.png" alt="imagen carro vacío"/><h3>El carrito está vacio</h3><Link to="/"><button className="borrarCarrito">Volver a Home</button></Link></div>
            }
        </div>
    )
}

export default Cart