import "./item.css"

const Item = (productos2) =>{

    return (
        <>
            <div className="CardContainer">
        
                <div className="contenedorImagen"><img className="img" src={productos2.img}/></div>
                <div className="contenedorDatos">
                    <p>{productos2.nombre}</p>
                    <p>{productos2.categoria}</p>
                    <button>Ver detalle del producto</button>
                    <p>Stock disponible: {productos2.cantidad}</p>
                  
                </div>
                
            </div>
            
        </>
            )

}

export default Item