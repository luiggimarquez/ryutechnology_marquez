import { useState } from "react";
import "./itemCount.css"

const ItemCount = ({initial = 0, stock, OnAdd}) => {

    const [count,setCount] = useState(initial);

    const incrementar = () =>{

       (count < stock) && setCount(count + 1);
    }

    const decrementar = () =>{

        (count > 0) && setCount(count - 1);

    }

    const alert = () =>{

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
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
            title: 'Has excedido el stock'
          })
    }


    return(

    <div className="buttonContainer">

        <div className="boton">

            <button className="botonCount" onClick={incrementar} > + </button>
            <p>{count}</p>
            <button className="botonCount" onClick={decrementar} > - </button> 
            <button className="botonCarrito" onClick={() => (count < stock) ? OnAdd(count) : alert()}>Agregar al carrito</button>

        </div>
    </div>

    )

}

export default ItemCount;