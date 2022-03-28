import "./ItemDetailContainer.scss"
import { getItem } from "../../AsyncMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const { id } = useParams();
    const[itemDeta,setItem] = useState([])

    useEffect(() =>{


        getItem(id).then(recibir =>{

            setItem(recibir)
        })

    },[id])

    
    return (

        <div>

            <ItemDetail item={itemDeta}/>

        </div>
    )
}

export default ItemDetailContainer