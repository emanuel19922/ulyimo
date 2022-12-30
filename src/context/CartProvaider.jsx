import { createContext } from "react";
import { useState } from "react";




export const Datacontex = createContext([]);



const CartProvaider = ({ children }) => {

    const [cart, setcart] = useState([])


    //    que no deja agregar a carrito product repetido
    const isincart = (id) => {
        return cart.some((product) => product.id === id)
    }


    const addtocart = (product, quantiti) => {
        // aca balido si esta  repetdio me haga un alert 
        if (isincart(product.id)) {
            alert("repetido")
        }

        setcart([...cart, { ...product, quantiti }])

    }

    return (
        <Datacontex.Provider value={{ cart, addtocart, setcart }}>
            {children}


        </Datacontex.Provider>

    )



}

export default CartProvaider;