import Item from "../Item/Item";

const ItemList = ({products}) =>{

    return (
        
        <div className="contenedor">

            {products.map(product => <Item key={product.id} nombre={product.nombre} img={product.img} categoria={product.categoria} cantidad={product.cantidad}/>)}
            
        </div>
        
    
    )
}

export default ItemList