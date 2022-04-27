import "./itemListContainer.scss"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import itemNotFound from "../../assets/itemNotFound.json";
import { getProducts } from "../../services/Firestore";

const   ItemListContainer = ({saludo}) => {

    const { id } = useParams()
    const[products,setProducts] =useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        getProducts(id).then (recibir =>{

            setProducts(recibir);
        
        }).catch(error =>{
    
            console.log(error);

        }).finally(()=>{
    
            setLoading(false)
        })
            
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

    const options = { //parametros de animacion Lottie para cuando se coloque una categoria que no existe en el URL

        animationData: itemNotFound,
        autoplay: true,
        loop: true,
        style: {
            width: '50%',
        },
    }

    return(

        <div>

            <h1 className="h1">{saludo}</h1>
            {(products.length !== 0) ? <ItemList products={products}/> : <section className='itemNotFound'><Lottie {...options}/><h2 className="h2">No se ha encontrado</h2></section>}
     
        </div>
    )
}

export default ItemListContainer