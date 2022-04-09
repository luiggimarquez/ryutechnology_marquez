import "./ItemDetailContainer.scss"
import { getItem } from "../../AsyncMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Lottie from "lottie-react";
import error404 from "../../assets/itemNotFound.json"

const ItemDetailContainer = () => {

    const { id } = useParams();
    const[itemDeta,setItem] = useState([])
    const[loading, setLoading] = useState(true);

    useEffect(() =>{

        setLoading(true)
        getItem(id).then(recibir =>{

            setItem(recibir)
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

        animationData: error404,
        autoplay: true,
        loop: true,
        style: {
            width: '50%',
        },
    }
    
    return (

        <div>

            {(itemDeta !== undefined) ? <ItemDetail item={itemDeta} /> : <section className='error404'><Lottie {...options}/><h1>Elemento no existe en stock</h1></section>}

        </div>
    )
}

export default ItemDetailContainer