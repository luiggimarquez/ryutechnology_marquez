import "./cart.scss"
import { useContext } from "react";
import Context from '../../context/CartContext';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Cart = () =>{

    const {cart} = useContext(Context)
    const {clearItem} = useContext(Context) 
    const {eliminarItem} = useContext(Context)
    let subTotal = 0;

    cart.forEach(elemento =>{

        subTotal = subTotal + (elemento.agregados*elemento.precio)
    })

    const[loading, setLoading] = useState(true);
    useEffect(() => {

        let a = false

        setTimeout(() => {

            setLoading(a)
        },1500)

    },[])

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
            <button className="borrarCarrito" onClick={() => clearItem()}> Borrar carrito </button> <Link to="/formulario"><button className="borrarCarrito">procesar compra</button></Link></> : <div className="carritoVacio"><img src="/img/empty_cart.png" alt="imagen carro vacío"/><h3>El carrito está vacio</h3><Link to="/"><button className="borrarCarrito">Volver a Home</button></Link></div>
            
            }
        </div>
    )
}

export default Cart