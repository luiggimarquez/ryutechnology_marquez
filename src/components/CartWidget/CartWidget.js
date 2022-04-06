import cart from "./cart.png"
import "./cartWidget.scss"
import { useContext } from "react"
import Context from "../../context/CartContext"

const CartWidget = () =>{

    const { getNumeroCarrito } = useContext(Context)

    return (

        <div className="cart">

            <img className="imgCart" src={cart} alt="imagen carrito"/>
            <span className="countCart">{getNumeroCarrito()}</span>

        </div>
    )

}

export default CartWidget