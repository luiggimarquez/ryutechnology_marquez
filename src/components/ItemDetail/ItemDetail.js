import "./ItemDetail.scss"
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount';
import {useState} from "react"
import { useContext } from "react";
import Context from '../../context/CartContext';
import WishListContext from "../../context/WishListContext";

const ItemDetail = ({item}) => {

    const [quantity,setQuantity]=useState(0);
    const { addItem } = useContext(Context)
    const { addWishList, validateItemWishList, removeWishList} = useContext(WishListContext)
    const OnAdd = (agregados) =>{

        setQuantity(agregados) 
        addItem({agregados,...item})
    }

    let validate = validateItemWishList(item.id)

    return(

        <div className="contenedorDetails"> 

            <div className="cardContainerDetails">

                <img src={item.img} alt='producto en venta'/>
                <p id="tituloDetail">Producto: { item.nombre}</p>
                <p>Marca: {item.marca}</p>
                <p>Tipo: {item.tipo}</p>
                <p>Categoría: {item.categoria}</p>
                <p>Precio: {item.precio} USD</p>
                { item.cantidad === 0 ? null: ((quantity === 0) ? <ItemCount inicial={1} OnAdd={OnAdd}/>: <Link to="/cart"><button className="irCart">Ir a Cart</button> </Link>) }
                {(item.cantidad !== 0) ? <p className="parrafoStock">Stock disponible: {item.cantidad}</p> : <p className="parrafoStock">Articulo sin Stock</p>}
                { (!validate) ? <button className="addWishButtom" onClick={() => addWishList({item})} >Agregar a WishList</button> : <button className="removeWishButtom" onClick={() => removeWishList(item.id)} >Remover de WishList</button>} 
            </div>
            
            <div className="detalleDetails">
                <div>{item.detalle}</div>
                <Link to="/"> <button className="botonVolver">Volver</button></Link>
            </div>

        </div>
    )
}

export default ItemDetail;