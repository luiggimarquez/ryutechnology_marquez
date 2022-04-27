import cart from "./cart.png"
import "./cartWidget.scss"
import { useContext } from "react"
import Context from "../../context/CartContext"
import {Link} from "react-router-dom"

const CartWidget = () =>{

    const { getNumeroCarrito } = useContext(Context)
    return (

        <div className="cart">

            <Link className="linkCart" to="/cart"><picture><img className="imgCart" src={cart} alt="imagen carrito"/></picture></Link>
            <span className="countCart">{getNumeroCarrito()}</span>

        </div>
    )
}

export default CartWidget