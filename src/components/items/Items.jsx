import '../items/_items.scss'
import { useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { Datacontex } from '../../context/CartProvaider'


const Items = ({produs}) => {
const {cart ,addtocart} = useContext( Datacontex)


const[contador,setcontador]= useState(1)

const Morecount = () =>{
    setcontador(contador + 1 ) 
}
const less = () =>{
  setcontador((lescount)=>{
    if(lescount > 1 ) {
      return lescount -1;
    } else {
      return lescount
    }
  }) }



  return (
  
    <div className='ItemsProduct'>
     
   <Link className='ItemsProduct_link' to={`/filter/${produs.id}`}>
   <img className='ItemsProduct_images' src= {`/imagesid/${produs.imageid}`} alt="" />
       
        <h2 className='ItemsProduct_Items'> producto:{produs.title}</h2>
        <h2 className='ItemsProduct_Items'>precio:{produs.price}$</h2>
        <h2 className='ItemsProduct_Items'> color:{produs.description}</h2>
        <h2 className='ItemsProduct_Items'>Productos en stock:{produs.stock}</h2>
        <h2>cantidad: {contador}</h2>
        
        </Link>
        
  
     
    <button onClick= { Morecount }> suma   </button>
    <button onClick= {less }>resta</button>
    <button onClick={()=>{addtocart(produs,contador)}}>enviar </button>
      
        </div>
       
  )
}

export default Items