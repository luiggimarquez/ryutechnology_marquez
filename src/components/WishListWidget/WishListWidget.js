import "./WishListWidget.scss"
import wishlist from "./img/wishlist.png"
import {Link } from "react-router-dom"

const WishListWidget = () =>{

   
    return (

        <div className="wishListWidget">

            <Link className="wishLink" to="/wishlist"><picture><img className="imgWish" src={wishlist} alt="imagen carrito"/></picture></Link>
            
        </div>
    )
}

export default WishListWidget