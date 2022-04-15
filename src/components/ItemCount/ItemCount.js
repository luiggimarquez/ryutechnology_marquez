import { useState, useEffect } from "react";
import "./itemCount.scss"
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import Context from '../../context/CartContext';
import { useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestoreDb } from "../../services/Firebase";

const ItemCount = ({initial = 1, OnAdd}) => {

    const [stock, setStock] = useState([]);
    const [count,setCount] = useState(initial); //contador de los botones
    const [carrito,setCarrito] = useState([]); //contador de la cantidad de stock
    const { id } = useParams()
    const { cart } = useContext(Context)
 
    useEffect(()=>{

        const docRef = doc(firestoreDb,'items',id)
        getDoc(docRef).then(querySnapshot =>{

            const elemento = { id: querySnapshot.id, ...querySnapshot.data()}
            setStock(elemento)
            setCarrito(elemento.cantidad)
        })

        return (() => {

            setStock([])
            setCarrito([])
        })

    },[id])
  
    const incrementar = () =>{

        if(cart.length === 0 && (stock.cantidad !== 0)){

            (count < stock.cantidad) && setCount(count + 1);

        }else{

            let valida = cart.find(ele => ele.id === stock.id)
            
            if(valida){

                (count < (stock.cantidad - valida.agregados)) && setCount(count + 1);
                if(((stock.cantidad - valida.agregados) <= 0) || (stock.cantidad === 0)){

                    alert();
                }

            }else{

                (count < stock.cantidad) ? setCount(count + 1): alert();
            }
        }
    }

    const decrementar = () =>{

        (count > 1) && setCount(count - 1);
    }

    const botonAgregar = () => {

        let validarCarrito=[];
        if(cart.length !== 0){

          validarCarrito = cart.find(ele => ele.id === stock.id)
        }
        
        if((count <= carrito && ((cart.length === 0)|| validarCarrito === undefined)) || (count <= carrito && (stock.cantidad - validarCarrito.agregados))){ 
         
            OnAdd(count)
            setCarrito(carrito-count)

        }else{

            alert()  
        } 
    }

    const alert = () =>{

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

            icon: 'info',
            title: 'Cantidades insuficientes o has excedido el stock'
        })
    }

    return(

        <div className="buttonContainer">

            <div className="botonesCarrito">
                <button className="botonesCantidad" onClick={decrementar}>-</button>
                <span>{count}</span>
                <button className="botonesCantidad" onClick={incrementar}>+</button>
                <button className="botonAdd" onClick={() => {botonAgregar()}}>Agregar al carrito</button>
            </div>
            
        </div>

    )
}

export default ItemCount;