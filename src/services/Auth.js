import {getAuth, createUserWithEmailAndPassword,signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "./Index"

const auth = getAuth(app);

export const userRegisterFirebase = (name, password, phone, mail) =>{

    return new Promise ((resolve, reject) =>{

        createUserWithEmailAndPassword(auth,mail,password)
        .then((userCredential)=>{

            const user = userCredential.user;
            resolve(user)

        }).then(() =>{

            updateProfile (auth.currentUser,{
        
                displayName : name,
                photoURL: phone,
                
            }).then(() => {
            
            }).catch((error) => {

                console.log(error)
                
            });

        }).catch((error)=>{

            reject (error)  
        }); 
    })

}

export const userLoginFirebase = (mail, password) => {

    return new Promise ((resolve,reject) =>{

        signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) =>{

            const user = userCredential.user;
            resolve(user)

        }).catch((error) =>{

            reject(error)
        })


    })

}

export const userSignOutFirebase = () => {

    return new Promise ((resolve,reject) => {

        signOut(auth)
        .then(() => {

            const user = []
            resolve(user)
            
        }).catch((error) => {

           reject(error)

        });
    })
}
