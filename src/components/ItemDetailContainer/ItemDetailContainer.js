import "./ItemDetailContainer.scss"
import { getItem } from "../../AsyncMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const { id } = useParams();
    const[itemDeta,setItem] = useState([])
    const[loading, setLoading] = useState(true);

    console.log(id)
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

    console.log(itemDeta)

    if(loading){

        return (

            <div className="loaderContainer">
                <div className="loader"></div>
                <p>Loading info ...</p>
            </div>

        )
          
    }
    
    return (

        <div>

            {(itemDeta !== undefined) ? <ItemDetail item={itemDeta} /> : <h1>Elemento no exite en stock</h1>}

        </div>
    )
}

export default ItemDetailContainer