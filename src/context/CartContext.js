import { createContext, useState, useEffect} from "react";

const Context = createContext();

export const  CartContextProvider = ( { children }) => {

    const [cart,setCart] = useState([])

    useEffect(()=>{

        const data = localStorage.getItem('carrito')
        setCart(JSON.parse(data))

    }, [])

    useEffect(() => {
        
       (cart.length) && localStorage.setItem("carrito", JSON.stringify(cart));
       (cart.length === 0) && localStorage.setItem("carrito", JSON.stringify([]));

    }, [cart]);
 
    const addItem = (itemAgregado) => {

        if (cart.length === 0){

            setCart([itemAgregado])

        }else{

            let valida= cart.some(ele => ele.id === itemAgregado.id)

            if(valida){

                cart.forEach(ele =>{
                   
                    if(ele.id === itemAgregado.id ){

                       ele.agregados=ele.agregados+itemAgregado.agregados
                    }
                } )

                setCart([...cart])

            }else{

                setCart([...cart,itemAgregado])
            }
        }
    }

  
    const clearItem = () => {

        setCart([]);
    }

    const eliminarItem = (id) => {

       let quitar = cart.filter(elemento => elemento.id !== id)
       setCart(quitar)
    }

    const removeOutOfStock = (ids) => {
        let quitar =cart

        console.log(ids)
        ids.forEach(toDelete =>{

            quitar = quitar.filter(elemento => elemento.id !== toDelete)
            console.log(ids)
            console.log(quitar)
            setCart(quitar)
        })

        console.log(cart)
    }

    const getNumeroCarrito = () =>{

        let numero = 0;
        cart.forEach(elemento =>{

            numero = numero + elemento.agregados;
        })
        return numero
    }

    return (
        
        <Context.Provider value={{cart, addItem, clearItem,eliminarItem, getNumeroCarrito, removeOutOfStock }}>
            {children} 
        </Context.Provider>
    )
}

export default Context