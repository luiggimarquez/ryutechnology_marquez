import "./itemDetail.scss"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {

    console.log(item)

    return(

        <div className="contenedorDetails"> 

            <div className="cardContainerDetails">

                <img src={item.img}/>
                <div className="botonesCarrito">
                    <button className="botonesCantidad">-</button>
                    <span>0</span>
                    <button className="botonesCantidad">+</button>
                    <button className="botonAdd" >Agregar a Carrito</button>
                </div>
                <p id="tituloDetail">Producto: { item.nombre}</p>
                <p>Marca: {item.marca}</p>
                <p>Tipo: {item.tipo}</p>
                <p>Categoría: {item.categoria}</p>
                <p>Precio: {item.precio}</p>
                <p>Stock disponible: {item.cantidad}</p>

            </div>
            
            <div className="detalleDetails">
                <div>{item.detalle}</div>
                <Link to="/"> <button className="botonVolver">Volver</button></Link>
            </div>

        </div>
    )
}

export default ItemDetail;