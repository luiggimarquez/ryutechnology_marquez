import { useState, useEffect } from "react";
import "./ItemCount.scss"
import { useParams } from "react-router-dom";
import Context from '../../context/CartContext';
import { useContext } from "react";
import NotificationContext from "../../context/NotificationContext";
import { setLimitItemCount } from "../../services/Firestore";

const ItemCount = ({initial = 1, OnAdd}) => {

    const [stock, setStock] = useState([]);
    const [count,setCount] = useState(initial); //contador de los botones
    const [carrito,setCarrito] = useState([]); //contador de la cantidad de stock
    const { id } = useParams()
    const { cart } = useContext(Context)
    const { setNotification } = useContext(NotificationContext)
 
    useEffect(()=>{

        setLimitItemCount(id).then((elemento) =>{

            setStock(elemento)
            setCarrito(elemento.cantidad)

        }).catch((error) =>{

            console.log(error)
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

                    setNotification('info', 'Cantidades insuficientes o has excedido el stock',3000 )
                }

            }else{

                (count < stock.cantidad) ? setCount(count + 1): setNotification('info', 'Cantidades insuficientes o has excedido el stock',3000 );
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

            setNotification('info', 'Cantidades insuficientes o has excedido el stock',3000 )  
        } 
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