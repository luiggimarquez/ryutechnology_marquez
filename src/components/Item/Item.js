import "./item.scss"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { Link } from "react-router-dom"

const Item = (productos2) =>{

    return (
        <>
            <div className="CardContainer">
            
                <div className="contenedorImagen"><img className="img" src={productos2.img}/></div>
                <div className="contenedorDatos">

                    <p>Nombre: {productos2.nombre}</p>
                    <Link to={`/item/${productos2.id}`}><button >Ver detalles del producto</button></Link>
                    <p>Stock disponible: {productos2.cantidad}</p>
                    
                </div>
                    
            </div>
                
        </>
    )

}

export default Item