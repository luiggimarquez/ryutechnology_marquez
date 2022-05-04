import { collection, getDocs,query, where, doc, getDoc, writeBatch, documentId, addDoc} from "firebase/firestore";
import { firestoreDb } from "./IndexFirebase";
import { createAdapterProduct } from "../adapters/ProductAdapters";


export const getProducts = (id) =>{

    return new Promise ( (resolve, reject) =>{

        const collectionRef = id ? query(collection(firestoreDb,'items'), where('categoria','==',id) ) : collection(firestoreDb,'items')
        getDocs(collectionRef).then(querySnapshot =>{
    
            const items = querySnapshot.docs.map(doc => {
    
                return createAdapterProduct(doc)
            })
            resolve(items);

        }).catch( error => {

            reject(error)
        })
    }) 
}

export const getItem = (id) => {

    return new Promise ((resolve, reject) =>{

        const docRef = doc(firestoreDb,'items',id);
        getDoc(docRef).then(querySnapshot =>{

            const elemento = createAdapterProduct(querySnapshot) 
            resolve(elemento)

        }).catch( error => {

            reject(error)
        })
    })
}

export const getNavbar = () =>{

    return new Promise ((resolve, reject) =>{

        const collectionRef = collection(firestoreDb,'categorias')
        getDocs(collectionRef).then(querySnapshot =>{
    
            const items = querySnapshot.docs.map(doc => {
    
                return createAdapterProduct(doc)
            })
            resolve(items);

        }).catch( error => {

            reject(error)
        })
    })
}

export const createOrderAndUpdateStock = (cart, objOrder) => {

    return new Promise ((resolve, reject) =>{

        const batch = writeBatch(firestoreDb)
        const outOfStock = []
        const ids = cart.map(item => item.id)
        const collectionRef = collection(firestoreDb, "items")

        getDocs(query(collectionRef, where(documentId(),"in", ids )))
        .then(response => {

            response.docs.forEach(doc => {
                   
                const dataDoc = doc.data()
                const prodAgregados = objOrder.items.find(prod => prod.id === doc.id).agregados

                if(dataDoc.cantidad >= prodAgregados){

                    batch.update(doc.ref, {cantidad : dataDoc.cantidad - prodAgregados})

                }else{

                    outOfStock.push({id:doc.id, dataDoc})
                }
            })

        }).then(() =>{

            if(outOfStock.length === 0){
                    
                const collectionRef = collection(firestoreDb,"orders")
                return addDoc(collectionRef, objOrder)

            }else{

                return Promise.reject({name: "outOfStockError", products: outOfStock})
            }    

        }).then(( { id }) =>{

            batch.commit()
            resolve(id)

        }).catch((error) =>{

            reject(error)
        })
    })
}

export const setLimitItemCount = (id) => {

    return new Promise ((resolve, reject)=>{
    
        const docRef = doc(firestoreDb,'items',id)
        getDoc(docRef).then(querySnapshot =>{

            const elemento = createAdapterProduct(querySnapshot);
            resolve(elemento)
            
        }).catch((error) =>{

            reject(error)
        })
    })
}

export const createPurchaseOrder = (userId) => {

    return new Promise ((resolve, reject) => { 
        
        const collectionRef = query(collection(firestoreDb,'orders'), where('buyer.uid','==',userId) )
        getDocs(collectionRef).then(querySnapshot =>{

            const items = querySnapshot.docs.map(doc => {

                return{ id: doc.id, ...doc.data() }
            })
            resolve(items)
        }).catch((error) =>{

            reject(error)
        })
    })
}

export const getWishList = (userId) => {

    return new Promise ((resolve, reject) => { 
        
        const collectionRef = query(collection(firestoreDb,'wish'), where('user','==',userId) )
        getDocs(collectionRef).then(querySnapshot =>{

            const items = querySnapshot.docs.map(doc => {

                return{ id: doc.id, ...doc.data() }
            })
            resolve(items)
        }).catch((error) =>{

            reject(error)
        })
    })
}
