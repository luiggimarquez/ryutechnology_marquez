import cart from "./cart.png"
import "./cartWidget.scss"

const CartWidget = () =>{

    return (

        <div className="cart">

            <img className="imgCart" src={cart}/>
            <span className="countCart">0</span>

        </div>
    )

}

export default CartWidget