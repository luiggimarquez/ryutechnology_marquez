import "./item.scss"
import { Link } from "react-router-dom"

const Item = (productos2) =>{

    return (
        <>
            <div className="item">

                <div className="CardContainer">
                
                    <div className="contenedorImagen"><img className="img" src={productos2.img} alt='producto en venta'/></div>
                    <div className="contenedorDatos">

                        <p>{productos2.nombre}</p>
                        <p>Producto: {productos2.categoria}</p>
                        <Link to={`/item/${productos2.id}`}><button >Ver detalles del producto</button></Link>
                        <p>Stock disponible: {productos2.cantidad}</p>
                        
                    </div> 
                </div>
            </div>
                
        </>
    )

}

export default Item