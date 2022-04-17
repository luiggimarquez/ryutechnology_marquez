import { collection, getDocs,query, where } from "firebase/firestore";
import { firestoreDb } from ".";

export const getProducts = (id) =>{

    return new Promise ( (resolve, reject) =>{

        const collectionRef = id ? query(collection(firestoreDb,'items'), where('categoria','==',id) ) : collection(firestoreDb,'items')
        getDocs(collectionRef).then(querySnapshot =>{
    
            const items = querySnapshot.docs.map(doc => {
    
                return{ id: doc.id, ...doc.data() }
            })
            resolve(items);

        }).catch( error => {

            reject(error)

        })

    })

}