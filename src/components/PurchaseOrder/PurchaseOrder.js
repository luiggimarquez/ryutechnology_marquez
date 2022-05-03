import "./PurchaseOrder.scss"
import { useState, useEffect } from "react";
import UserContext from '../../context/UsersContext';
import { useContext } from "react";
import { Link } from "react-router-dom"
import { createPurchaseOrder } from "../../services/Firestore";
import Lottie from "lottie-react";
import itemNotFound from "../../assets/itemNotFound.json"

const PurchaseOrder = () =>{

    const [loading, setLoading] =useState(false)
    const [purchaseOrder, setPurchaseOrder] = useState([])
    const { user, orderNumber } = useContext(UserContext)
    let resultado =[]
    let userId = user.uid
  
    useEffect(() => {

        setLoading(true);
        createPurchaseOrder(userId).then((items) =>{

            setPurchaseOrder(items);

        }).catch(error =>{
            console.log(error);

        }).finally(()=>{
            setLoading(false)
        })

    },[userId])

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
            alignSelf: 'center',
        },
    }

    resultado = purchaseOrder.find(elemento => elemento.id === orderNumber)
 
    return(

        <div className="purchaseOrderContainer">

            {((userId !== undefined) && orderNumber.length !== 0)  ?
            
                <><h2>Detalles - orden de compra</h2>
                    { (resultado !== undefined) && 
                    
                        <>
                            <div className="userData">

                                <p>ID de compra: <b>{resultado.id}</b></p>
                                <p>Nombre: {resultado.buyer.name}</p>
                                <p>Mail: {resultado.buyer.email}</p>
                                <p>Teléfono: {resultado.buyer.phone}</p>
                                <p>Fecha compra: {resultado.date}</p>
                                <p>Monto: {resultado.total} USD</p>
                                
                            </div>

                            <div className="itemData">
                                
                                { resultado.items.map(elemento =><div key={elemento.id}>
                                    
                                    <picture className="imgPurchaseOrder"><img src={elemento.img} alt="Foto producto comprado"/></picture>
                                    <p>Producto: {elemento.nombre}</p>
                                    <p>Marca: {elemento.marca}</p>
                                    <p>Cantidad comprada: {elemento.agregados}</p>
                                
                                </div>)}  
                            </div>
                        </>
                    }
                
                    <Link to="/"><button className="botonRegresar" >Volver a Home</button></Link>
                </> : <div className="accessLottie"><Lottie {...options}/><h1>Nada que ver por aquí</h1></div>
            }

        </div>
    )
}

export default PurchaseOrder