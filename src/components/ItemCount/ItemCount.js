import { useState } from "react";
import "./itemCount.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
let carrito1=0;

const ItemCount = ({initial = 1, stock, OnAdd}) => {

    const [count,setCount] = useState(initial); //contador de los botones
    const [carrito,setCarrito] = useState(stock); //contador de la cantidad de stock

    const incrementar = () =>{

       (count < stock) && setCount(count + 1);
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

        <div className="boton">

            <div className="alineaBoton">
                <button className="botonCount" onClick={incrementar} > + </button>
                <p>{count}</p>
                <button className="botonCount" onClick={decrementar} > - </button>
            </div>
            <button className="botonCarrito" onClick={() => {botonAgregar()}}>Agregar al carrito</button>
            <p>Stock disponible: {carrito}</p>

        </div>
    </div>

    )
}

export default ItemCount;