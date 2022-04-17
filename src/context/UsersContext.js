import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react"
import { createContext } from "react";


const UserContext = createContext();

export const  UserContextProvider = ( { children }) => {

    const[user,setUser]=useState([])
    const[usersList, setUsersList]=useState([])

    console.log(usersList)
    

    const auth = getAuth();

    const register= (name, password, phone, mail) => {
        
        createUserWithEmailAndPassword(auth,mail,password)
            .then((userCredential)=>{

            const user = userCredential.user;
            setUsersList(name, password, phone, mail, {...user.uid})

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
             console.log("sesion cerrada", user)
            
        }).catch((error) => {
            console.log(error)
        });

    }

    console.log("final", user)

    return(

        <UserContext.Provider value={{login, register, singOut, user}}>
            {children} 
        </UserContext.Provider>
        
    )

}

export default UserContext