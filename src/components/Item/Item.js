import "./item.css"

const Item = (productos2) =>{

    return (
        <>
            <div className="CardContainer">
        
                <div className="contenedorImagen"><img className="img" src={productos2.img}/></div>
                <div className="contenedorDatos">

                    <p>Marca: {productos2.marca}</p>
                    <p>Modelo: {productos2.nombre}</p>
                    <p>Categoría: {productos2.categoria}</p>
                    <button className="">Ver detalle del producto</button>
                    <p>Stock disponible: {productos2.cantidad}</p>
                  
                </div>
                
            </div>
            
        </>
            )

}

export default Item