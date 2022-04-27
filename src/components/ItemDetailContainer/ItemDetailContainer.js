import "./ItemDetailContainer.scss"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Lottie from "lottie-react";
import itemNotFound from "../../assets/itemNotFound.json"
import { getItem } from "../../services/Firestore";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const[itemDeta,setItem] = useState([])
    const[loading, setLoading] = useState(true);

    useEffect(() =>{

        setLoading(true)
        getItem(id).then( (elemento) =>{
            
            setItem(elemento)

        }).catch( error =>{
            
            console.log(error)

        }).finally( () => {

            setLoading(false)
        })

        return (() => {

            setItem([])
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

    const options = {

        animationData: itemNotFound,
        autoplay: true,
        loop: true,
        style: {
            width: '50%',
        },
    }
    
    return (

        <div>
            {(itemDeta.cantidad !== undefined) ? <ItemDetail item={itemDeta} /> : <section className='itemNotFound'><Lottie {...options}/><h1>Elemento no existe en stock</h1></section>}
        </div>
    )
}

export default ItemDetailContainer