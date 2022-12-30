
import { useState, useEffect, useContext } from 'react'
import { Datacontex } from '../../context/CartProvaider'

const Itemforproducts = ({ productid }) => {
  const { cart, addtocart } = useContext(Datacontex)

  const [contador, setcontador] = useState(1)

  const Morecount = () => {
    setcontador(contador + 1)
  }
  const less = () => {
    setcontador((lescount) => {
      if (lescount > 1) {
        return lescount - 1;
      } else {
        return lescount
      }
    })
  }


  return (
    <div className="ItemsProduct">

      <img className='ItemsProduct_images' src={`/imagesid/${productid.imageid}`} alt="" />

      <h2 className='ItemsProduct_Items'>precio:{productid.price}$</h2>
      <h2 className='ItemsProduct_Items'> color:{productid.description}</h2>
      <h2 className='ItemsProduct_Items'>Productos en stock:{productid.stock}</h2>

      <h5>no dudes en hacer tu compra los mejores productos</h5>
      <h5>{contador}</h5>
      <button onClick={Morecount}> suma   </button>
      <button onClick={less}>resta</button>
      <button onClick={() => { addtocart(productid, contador) }}>enviar </button>


    </div>
  )
}

export default Itemforproducts