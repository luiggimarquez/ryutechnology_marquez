import { createContext, useState,useEffect } from "react";

const Context = createContext();

export const  CartContextProvider = ( { children }) => {

    const [cart,setCart] = useState([])

    const addItem = (itemAgregado) => {

        console.log(cart)

        if (cart.length === 0){

            setCart([itemAgregado])
        }else{

            

            let valida= cart.some(ele => ele.id === itemAgregado.id)

            console.log(valida)

            if(valida){

               
                cart.forEach(ele =>{
                   
                    if(ele.id === itemAgregado.id ){

                       ele.agregados=ele.agregados+itemAgregado.agregados
                    }
                } )

                console.log(cart)

            }else{

                setCart([...cart,itemAgregado])
            }
        }

    }
  
    useEffect(() =>{

        console.log(cart)

    },[cart] )
    
    
    const clearItem = () => {

        setCart([]);

    }

    const eliminarItem = (id) => {

        console.log(id)

       let quitar = cart.filter(elemento => elemento.id !== id)
       setCart(quitar)

    }

    const getNumeroCarrito = () =>{

        let numero = 0;

        cart.forEach(elemento =>{

            numero = numero + elemento.agregados;
        })

        return numero
    }

    return (
        
        <Context.Provider value={{cart, addItem, clearItem,eliminarItem, getNumeroCarrito}}>
            {children} 
              
        </Context.Provider>
    )

}

export default Context