import "./PurchaseOrder.scss"
import { useState, useEffect } from "react";
import { collection, getDocs,query, where } from "firebase/firestore";
import UserContext from '../../context/UsersContext';
import { useContext } from "react";
import { firestoreDb } from "../../services/index";
import { Link } from "react-router-dom"

const PurchaseOrder = () =>{

    const [loading, setLoading] =useState(false)
    const [purchaseOrder, setPurchaseOrder] = useState([])
    const { user, orderNumber } = useContext(UserContext)
    let resultado =[]
    let userId = user.uid
  
    useEffect(() => {

        setLoading(true);
        const collectionRef = query(collection(firestoreDb,'orders'), where('buyer.uid','==',userId) )
        getDocs(collectionRef).then(querySnapshot =>{

            const items = querySnapshot.docs.map(doc => {

                return{ id: doc.id, ...doc.data() }
            })
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

    resultado = purchaseOrder.find(elemento => elemento.id === orderNumber)
 
    return(

        <div className="purchaseOrderContainer">

            <h2>Detalles - orden de compra</h2>
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
                        
                        <picture><img src={elemento.img} alt="Foto producto comprado"/></picture>
                        <p>Producto: {elemento.nombre}</p>
                        <p>Marca: {elemento.marca}</p>
                        <p>Cantidad comprada: {elemento.agregados}</p>
                    
                    </div>)}  
                </div>
            </>
            }

            <Link to="/"><button className="botonRegresar" >Volver a Home</button></Link>

        </div>
    )
}

export default PurchaseOrder