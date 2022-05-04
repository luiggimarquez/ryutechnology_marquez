import { createContext, useState, useEffect } from "react";
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
        ids.forEach(toDelete =>{

            quitar = quitar.filter(elemento => elemento.id !== toDelete)
            setCart(quitar)
        })
    }

    const getNumeroCarrito = () =>{

        let numero = 0;
        cart.forEach(elemento =>{

            numero = numero + elemento.agregados;
        })
        return numero
    }

    const getItemSubTotal = (precio,cantidad) => {

        return precio*cantidad
    }

    const getSubTotal =  () => {

        let subTotal=0;
        cart.forEach(elemento =>{

            subTotal = subTotal + (elemento.agregados*elemento.precio)
        })
        return subTotal
    }

    const getTotal = () => {

        let total = getSubTotal()*0.21 + getSubTotal()
        return total
    }

    return (
        
        <Context.Provider value={{cart, addItem, clearItem,eliminarItem, getNumeroCarrito, removeOutOfStock, getItemSubTotal, getSubTotal, getTotal }}>
            {children} 
        </Context.Provider>
    )
}

export default Context