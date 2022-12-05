import {  createContext } from "react";

export const Datacontex = createContext([]);



const CartProvaider = ({children}) => {
const valor = 44;
return(
<Datacontex.Provider value={{cart:[]}}>
{children}


</Datacontex.Provider>

)



}

export default CartProvaider;