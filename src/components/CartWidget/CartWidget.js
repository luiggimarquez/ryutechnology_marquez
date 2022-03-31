import cart from "./cart.png"
import "./cartWidget.scss"

const CartWidget = () =>{

    return (

        <div className="cart">

            <img className="imgCart" src={cart} alt="imagen carrito"/>
            <span className="countCart">0</span>

        </div>
    )

}

export default CartWidget