import Item from "../Item/Item";

const ItemList = ({products},{children}) =>{

        
    return (
        
        <div className="contenedor">

            {products.map(product => <Item key={product.id} id={product.id} nombre={product.nombre}
            tipo={product.tipo} categoria={product.categoria} marca={product.marca}
            precio={product.precio} cantidad={product.cantidad} img={product.img} 
            />)}
            {children}
            
        </div>
        
    )
}

export default ItemList