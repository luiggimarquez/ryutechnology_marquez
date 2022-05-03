import "./WishList.scss"
import WishListContext from "../../context/WishListContext"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import ItemCountWishList from "../itemCountWishList/ItemCountWishList"
import Lottie from "lottie-react";
import itemNotFound from "../../assets/itemNotFound.json"

const WishList = () => {

    const { addItem } = useContext(CartContext)
    const { list, removeWishList } = useContext(WishListContext)
    const options = {animationData: itemNotFound, autoplay: true, loop: true}
    const onAddWishList = (agregados,item) =>{

        addItem({agregados,...item})
        removeWishList(item.id)
    }

    return(<>

        { (list.length !== 0) ?   
            <div className="wishList">

                <h1>Wish List</h1>
                {list.map(elemento => <div className="itemsWishList" key={elemento.item.id}><p>Artículo: {elemento.item.nombre}</p> <p>Marca: {elemento.item.marca}</p><ItemCountWishList inicial={1} onAddWishList={onAddWishList} item={elemento.item} /></div>) }
                {(list.length <= 2) && <div className="guarda"></div>}
                
            </div> : <div ><Lottie className="accessLottieWish" {...options}/><h1>WishList Vacío ... Nada que ver por aquí</h1></div>
        }
    
    </>)
}

export default WishList