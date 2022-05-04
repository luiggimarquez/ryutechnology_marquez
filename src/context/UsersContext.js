import { onAuthStateChanged, getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { userLoginFirebase, userRegisterFirebase, userSignOutFirebase } from "../services/Auth";
import NotificationContext from "./NotificationContext";
import { useContext, useState, useEffect } from "react"
import { app } from "../services/IndexFirebase"
import { createContext } from "react";

const UserContext = createContext();
export const  UserContextProvider = ({ children }) => {

    const auth = getAuth(app);
    const[user,setUser] = useState([])
    const[loading, setLoading] = useState(true);
    const[orderNumber, setOrderNumber] = useState([])
    const {setNotification } = useContext(NotificationContext)
    
    setPersistence(auth, browserLocalPersistence); 
    onAuthStateChanged(auth, (user) => {

        if(user){ 

            setUser(user); 
            setLoading(false);

        } else {

            setLoading(false)
        }
    });

    useEffect(() => {

        let a = false
        setTimeout(() => {

            setLoading(a)
        },1000)

        return (() => {

            setLoading([])
        })
    },[])

    const register = (name, password, phone, mail) => {
 
        userRegisterFirebase(name, password, phone, mail).then((userCredential)=>{
            
            setUser(userCredential)

        }).catch(() => {

            setNotification('error',`Verificar el mail, puede que esté en blanco o ya haya sido registrado`,3000);    
        }); 
    }

    const login = (mail, password) => {

        userLoginFirebase(mail, password).then((userCredential)=>{
            
            setUser(userCredential)

        }).catch(() => {

            setNotification('error', 'Correo o contraseña inválida', 3000)
        });
    }

    const signOut = () => {

        userSignOutFirebase().then((userCredential) => {
            
            setUser(userCredential)
            
        }).catch((error) => {
            console.log(error)
        });
    }

    const getOrderNumber = (id) =>{

        setOrderNumber(id)
    }

    if(loading){

        return (

            <div className="loaderContainer">
                <div className="loader"></div>
                <p>Loading info ...</p>
            </div>
        )
    }

    return(

        <UserContext.Provider value={{login, register, signOut, user,orderNumber, getOrderNumber}}>
            {children} 
        </UserContext.Provider> 
    )
}

export default UserContext