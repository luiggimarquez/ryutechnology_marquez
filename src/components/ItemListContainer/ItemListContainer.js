import "./itemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../AsyncMock"
import { useState, useEffect } from "react";


const   ItemListContainer = ({saludo, children}) => {

    const[products,setProducts] =useState([])

    useEffect(() => {

        getProducts().then(recibir =>{

            setProducts(recibir)
        })



    },[])
    
    console.table(products)

    return(

        <div>

            <h1 className="h1">{saludo}</h1>
            <ItemList products={products}/>
            {children}
            

        </div>
    )
}

export default ItemListContainer