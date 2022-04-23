import {onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, setPersistence, browserLocalPersistence } from "firebase/auth";
import { useState } from "react"
import { createContext } from "react";

const UserContext = createContext();
export const  UserContextProvider = ( { children }) => {

    const[user,setUser]=useState([])
    const[orderNumber, setOrderNumber]=useState([])
    const[loading, setLoading] = useState(true);
    const auth = getAuth();
    
    setPersistence(auth, browserLocalPersistence); 
    onAuthStateChanged(auth, (user) => {

        if(user){ 

            setUser(user); 
            setLoading(false);

        } else {

            setLoading(false)
        }
    });

    const register= (name, password, phone, mail) => {
 
        createUserWithEmailAndPassword(auth,mail,password)
            .then((userCredential)=>{

                const user = userCredential.user;
                setUser(user)

            }).then(() =>{

                updateProfile (auth.currentUser,{
            
                    displayName : name,
                    photoURL: phone,
                    
                  }).then(() => {

                   
                  }).catch((error) => {

                    console.log(error)
                    
                });

            }).catch((error)=>{

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)    
        }); 
    }


    const login = (mail, password) => {

        signInWithEmailAndPassword(auth, mail, password)

        .then((userCredential) => {

            const user = userCredential.user;
            setUser(user)

        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const singOut = () => {

        signOut(auth).then(() => {

            setUser([])
            
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

        <UserContext.Provider value={{login, register, singOut, user,orderNumber, getOrderNumber}}>
            {children} 
        </UserContext.Provider> 
    )
}

export default UserContext