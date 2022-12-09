import { useEffect } from "react"

const Itemforproducts = ({productid}) => {


  return (
    <div className="ItemsProduct">
     
     <img className='ItemsProduct_images' src= {`/imagesid/${productid.imageid}`} alt="" />
      
      <h3>producto:{productid.title}</h3>
      <h4>precio:{productid.price}</h4>
      <h4>{productid.descrition}</h4>
      <h5>no dudes en hacer tu compra los mejores productos</h5>
      <button>enviar</button>
     

      </div>
  )
}

export default Itemforproducts