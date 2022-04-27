import { useState, useEffect } from "react";
import "./ItemCountWishList.scss"
import Context from '../../context/CartContext';
import { useContext } from "react";
import NotificationContext from "../../context/NotificationContext";
import { setLimitItemCount } from "../../services/Firestore";
import WishListContext from "../../context/WishListContext";

const ItemCountWishList = ({initial = 1, onAddWishList, item}) => {

    const [stock, setStock] = useState([]);
    const [count,setCount] = useState(initial); 
    const [carrito,setCarrito] = useState([]); 
    const { cart } = useContext(Context)
    const { setNotification } = useContext(NotificationContext)
    const { removeWishList } = useContext(WishListContext)
 
    console.log(item)
    useEffect(()=>{

        setLimitItemCount(item.id).then((elemento) =>{

            setStock(elemento)
            setCarrito(elemento.cantidad)

        }).catch((error) =>{

            console.log(error)
        })

        return (() => {

            setStock([])
            setCarrito([])
        })

    },[item.id])
  
    const incrementar = () =>{

        if(cart.length === 0 && (stock.cantidad !== 0)){

            (count < stock.cantidad) && setCount(count + 1);
        
        }else{

            let valida = cart.find(ele => ele.id === stock.id)
            
            if(valida){

                (count < (stock.cantidad - valida.agregados)) && setCount(count + 1);
                if(((stock.cantidad - valida.agregados) <= 0) || (stock.cantidad === 0)){

                    setNotification('error', 'No hay stock o ya se agregaron todas las unidades para este artículo',3000 )
                    removeWishList(item.id)
                }

            }else{

                (count < stock.cantidad) ? setCount(count + 1) : (setNotification('info', 'Sin Stock',3000 ))
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
         
            onAddWishList(count,item)
            setCarrito(carrito-count)

        }else{

            setNotification('error', 'No hay stock o ya se agregaron todas las unidades para este artículo',3000)
            removeWishList(item.id) 
        } 
    }

    return(

        <div className="buttonContainer">

            <div className="botonesCarrito">
                <button className="botonesCantidad" onClick={decrementar}>-</button>
                <span>{count}</span>
                <button className="botonesCantidad" onClick={incrementar}>+</button>
                <button className="botonAdd" onClick={() => {botonAgregar()}}>Agregar al carrito</button>
                <button className="botonAdd" onClick={() => removeWishList(item.id)}>Eliminar</button>
            </div>
            
        </div>
    )
}

export default ItemCountWishList;