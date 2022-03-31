import "./itemDetail.scss"
import { Link } from "react-router-dom"

const ItemDetail = ({item, children}) => {

    return(

        <div className="contenedorDetails"> 

            <div className="cardContainerDetails">

                <img src={item.img} alt='producto en venta'/>
                
                <p id="tituloDetail">Producto: { item.nombre}</p>
                <p>Marca: {item.marca}</p>
                <p>Tipo: {item.tipo}</p>
                <p>Categoría: {item.categoria}</p>
                <p>Precio: {item.precio} USD</p>
                {children}
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