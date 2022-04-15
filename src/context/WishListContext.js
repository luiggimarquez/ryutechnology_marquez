import { createContext,useState,useEffect} from "react";

const WishListContext = createContext();

export const  WishListContextProvider = ( { children }) => {

    const [list, setList] = useState([])

    useEffect(() =>{

        const data = localStorage.getItem("wishList")
        setList(JSON.parse(data))

    },[])

    useEffect(()=>{

        (list.length) && localStorage.setItem("wishList", JSON.stringify(list));
        (list.length === 0) && localStorage.setItem("wishList",JSON.stringify([]));

    },[list])

    const addWishList = (itemAgregado) => {

        if(list.length === 0){

            setList([itemAgregado])
        }else{

            console.log(itemAgregado)
            console.log(typeof(list))
            console.log(list)

            let valida = list.some(elemento => elemento.id === itemAgregado.id)

            if(valida){

                console.log("articulo ya exite en fav")

            }else{

                list.push(itemAgregado)
            }
        
        }

        

    }
console.log(list)
    return(

        <WishListContext.Provider value={ {list, addWishList} }>
            {children}
        </WishListContext.Provider>

    )

}

export default WishListContext