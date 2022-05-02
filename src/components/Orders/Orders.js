import "./Orders.scss";
import UserContext from "../../context/UsersContext";
import { useContext } from "react";
import { createPurchaseOrder } from "../../services/Firestore";
import { useEffect,useState } from "react";
import Lottie from "lottie-react";
import itemNotFound from "../../assets/itemNotFound.json";


const Orders = () => {

    const { user } = useContext(UserContext)
    const [toggle, setToggle] = useState(false)
    const [toggleId, setToggleId] = useState(false)
    const [loading, setLoading] =useState(false)
    const [search,setSearch] = useState([])
    const [purchaseOrder, setPurchaseOrder] = useState([])
    const options = { animationData: itemNotFound,autoplay: true, loop: true, style: { alignSelf: 'center' }}
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

    const consultId = (resultado) => {
        
        let filtrado = resultado.find( elemento => elemento.id === search)
        
        if(filtrado === undefined){
            
            return <Lottie className="lottieNotFound" {...options}><h1>Not Found</h1></Lottie>
        }
           
        return filtrado.items.map(elemento => {
        
            return <div className="productsOrder" key={elemento.id} >

                <picture className="imgOrderList"><img src={elemento.img} alt="imagen consulta ID de compra"/></picture>
                <p>Producto: {elemento.nombre}</p>
                <p>Marca: {elemento.marca}</p>
                <p>Cantidad comprada: {elemento.agregados}</p>

            </div>
        }) 
    }
      
    let resultado = purchaseOrder.map(elemento => {
        
        return { items:elemento.items, id: elemento.id, total: elemento.total }
    })
    
    return(

        <div className="totalContainer">
            
            { purchaseOrder.length !== 0 ?  <>
                
                <div className="AlingBottoms">
                    <button className="buttomOrders" onClick={() =>{ setToggle(!toggle); setToggleId(false)}}>Ver todas mis ordenes de compra</button>
                    <input className="inputId" placeholder="Inserte ID" onChange={(e) => {setSearch(e.target.value); setToggleId(false)}} required /><button className="buttomOrders" onClick={() => {setToggleId(!toggleId); setToggle(false)}}>Buscar Orden por ID</button>
                </div>

                {((toggle === false) && (toggleId === false)) && <div className="spaceToFill"></div>}
                
                {toggle && 
                
                    resultado.map( ele =><div key={ele.id} className="orderContainer">
                    
                    <p>ID de Compra: {ele.id}</p>
                    <p>Total de la compra: {ele.total} USD</p>
                
                    {ele.items.map( elemento =>{

                        return <div key={elemento.id} className="productsOrder">
                        
                            <picture  className="imgOrderList"><img src={elemento.img} alt="Imagen orden compra"/></picture>
                            <p>Producto: {elemento.nombre}</p>
                            <p>Marca: {elemento.marca}</p>
                            <p>Cantidad: {elemento.agregados}</p>
                            
                        </div>}
                    )}
                
                </div>)
                } 

                {toggleId && 

                    <div className="orderContainer">

                        {((resultado.find(elemento => elemento.id === search)) !== undefined ) &&

                            <><p>ID consultado: {resultado.find(elemento => elemento.id === search).id}</p>
                            <p>Total de la compra: {resultado.find(elemento => elemento.id === search).total}</p></>
                        }
                        {consultId(resultado)}
                        
                    </div>
                }

            </> : <Lottie className="lottie" {...options}><h1>No tienes ordenes registradas</h1></Lottie>

            }
        </div>
    )
}

export default Orders