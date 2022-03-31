import { useState, useEffect } from "react";
import "./itemCount.scss"
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import { getStock } from "../../AsyncMock";

const ItemCount = ({initial = 1, OnAdd}) => {

    const [stock, setStock] = useState([]);
    const [count,setCount] = useState(initial); //contador de los botones
    const [carrito,setCarrito] = useState([]); //contador de la cantidad de stock
    
    const { id } = useParams()

    useEffect(()=>{

        getStock(id).then(recibir =>{

            setStock(recibir)
            setCarrito(recibir.cantidad)
        })

        return (() => {

            setStock([])
            setCarrito([])
        })

    },[id])
  
    const incrementar = () =>{

       (count < stock.cantidad) && setCount(count + 1);
    }

    const decrementar = () =>{

        (count > 1) && setCount(count - 1);
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

    const botonAgregar = () => {
        
        if(count <= carrito){ 
            
            OnAdd(count)
            setCarrito(carrito-count)
            
        }else{

          alert()  
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