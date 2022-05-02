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

    const validateItemWishList = (item) => {

        let validate = list.some(elemento => elemento.item.id === item)
        return(validate)
    }

    const addWishList = (itemAgregado) => {

        
       list.length === 0 ? setList([itemAgregado]) : setList([...list, itemAgregado])
    }

    const removeWishList = (item) =>{

        let remove = list.filter(elemento => elemento.item.id !== item)
        setList(remove)
    }

    return(

        <WishListContext.Provider value={ {list, addWishList, validateItemWishList, removeWishList} }>
            {children}
        </WishListContext.Provider>
    )
}
export default WishListContext