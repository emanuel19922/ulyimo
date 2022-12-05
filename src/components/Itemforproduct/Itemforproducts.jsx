import { useEffect } from "react"

const Itemforproducts = ({productid}) => {


  return (
    <div>
      <h2>{productid.id}</h2>
      <h3>{productid.name}</h3>
      <h4>{productid.color}</h4>
      <button>enviar</button>
     

      </div>
  )
}

export default Itemforproducts