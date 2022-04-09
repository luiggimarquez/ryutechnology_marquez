import "./itemListContainer.scss"
import ItemList from "../ItemList/ItemList"
import { getCategoryById, getProducts } from "../../AsyncMock"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Lottie from "lottie-react";
import error404 from "../../assets/error404.json"


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

    const options = { //parametros de animacion Lottie para cuando se coloque una categoria que no existe en el URL

        animationData: error404,
        autoplay: true,
        loop: true,
        style: {
            width: '50%',
        },

    }

    
    return(

        <div>

            <h1 className="h1">{saludo}</h1>
            {(products.length !== 0) ? <ItemList products={products}/> : <section className='error404'><Lottie {...options}/></section>}
            
            
        </div>
    )
}

export default ItemListContainer