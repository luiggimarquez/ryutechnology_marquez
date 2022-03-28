import "./itemListContainer.scss"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../AsyncMock"
import { useState, useEffect } from "react";


const   ItemListContainer = ({saludo, children}) => {

    const[products,setProducts] =useState([])
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true)
        getProducts().then(recibir =>{

            setProducts(recibir)

        }).catch( error =>{
            
            console.log(error)

        }).finally( () => {

            setLoading(false)
        })

    },[])

    if(loading){

        return (

            <div className="loaderContainer">
                <div className="loader"></div>
                <p>Loading info ...</p>
            </div>

        )
    }
    
    return(

        <div>

            <h1 className="h1">{saludo}</h1>
            <ItemList products={products}/>
            {children}
            
        </div>
    )
}

export default ItemListContainer