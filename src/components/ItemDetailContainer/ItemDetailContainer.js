import "./ItemDetailContainer.scss"
import { getItem } from "../../AsyncMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {

    const OnAdd = (cantidad) =>{

        console.log(cantidad);
    }

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

    },[id])

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

            <ItemDetail item={itemDeta}><ItemCount inicial={1} OnAdd={OnAdd}/></ItemDetail>

        </div>
    )
}

export default ItemDetailContainer