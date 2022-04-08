import "./itemListContainer.scss"
import ItemList from "../ItemList/ItemList"
import { getCategoryById, getProducts } from "../../AsyncMock"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


const   ItemListContainer = ({saludo}) => {

    const { id } = useParams()
    const[products,setProducts] =useState([]);
    const[loading, setLoading] = useState(true);

    

    useEffect(() => {

        if(id){

            setLoading(true);
            getCategoryById(id).then (recibir =>{

                setProducts(recibir);
            }).catch(error =>{

                console.log(error);
            }).finally(()=>{

                setLoading(false)
            })
            

        }else{

            
            setLoading(true)
            getProducts().then(recibir =>{

                setProducts(recibir)

            }).catch( error =>{
                
                console.log(error)

            }).finally( () => {

                setLoading(false)
            })
        }

        return (() => {
            setProducts([])
        }) 

    },[id])

    if(loading){

        return (

            <div className="loaderContainer">
                <div className="loader"></div>
                <p>Loading info ...</p>
            </div>
        )
    }

    console.log(id)
    console.log(products)
    
    return(

        <div>

            <h1 className="h1">{saludo}</h1>
            {(products.length !== 0) ? <ItemList products={products}/> : <h1>No existe</h1>}
            
            
        </div>
    )
}

export default ItemListContainer