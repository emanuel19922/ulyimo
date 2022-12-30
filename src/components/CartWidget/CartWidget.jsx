import React from 'react'

import '../CartWidget/_CartWidget.scss'
import { useContext, useState, useEffect } from "react";
import { Datacontex } from '../../context/CartProvaider';
import { getFirestore, collection, getDocs, query, where, addDoc, doc, updateDoc } from "firebase/firestore"
import { clear } from '@testing-library/user-event/dist/clear';



export const CartWidget = () => {

  const { cart, addtocart, setcart } = useContext(Datacontex)
  //  acumulador del imput
  const [form, setform] = useState({
    name: "",
    phone: "",
    email: "",

  })

  const [oldcart, setoldcart] = useState(0)

  const gettotalprice = () => {

    setoldcart(cart.reduce((acc, product) => acc + product.price * product.quantiti, 0))
  }
  useEffect(() => {
    gettotalprice()
  }, [cart])

  // aca se genera la orden de compra

  const createorder = () => {
    const db = getFirestore();
    const query = collection(db, "order");
    const newoerder = {
      buyer: {
        name: form.name,
        phone: form.phone,
        email: form.email,

      },
      items: cart,
      total: oldcart,
    };
    addDoc(query, newoerder)
      .then((response) => {
        setcart([])
        setform(
          {
            name: "",
            phone: "",
            email: "",

          })
        alert("su compra fue finalizada con exito ")
        return (response)
      })
      .then((res) => {
        cart.forEach((product) => {
          const query = doc(db, 'items', product.id)
          updateDoc(query, {
            stock: product.stock - product.quantiti,
          }
          )

        })

      })
      .catch((error) => console.log(error))
  }
  // aca funcion para evento que captura el imput ...
  const handleinputchenge = (event) => {

    setform({
      ...form,
      [event.target.name]: event.target.value,
    });

  }
  const deletcarts = id => {
    const total = cart.filter(cart => cart.id !== id);
    setcart(total)
  }
  return (
    <div>
      <div className='containerproducts'>
        {

          cart.map((product) => (
            <div className='containerproducts_items' key={product.id}>
              <img className='ItemsProduct_images' src={`/imagesid/${product.imageid}`} alt="" />
              <h2 > producto:{product.title}</h2>
              <h2>precio:{product.price}$</h2>

              <h2>cantidad:{product.quantiti}</h2>
              <h2>color:{product.description}</h2>
              <button onClick={() => deletcarts(product.id)}>eliminar</button>

            </div>
          )
          )}

      </div>
      <div >
        <h1>total a pagar:{oldcart}</h1>
        <h1>cantidad de productos: {cart.length}</h1>
      </div>
      <div className=' containerproducts_forms'>
        <input onChange={handleinputchenge} name='name' type="text" placeholder='nombre' value={form.name}></input>
        <input onChange={handleinputchenge} name='phone' type="text" placeholder='phone' value={form.phone}></input>
        <input onChange={handleinputchenge} name='email' type="text" placeholder='email' value={form.email}></input>


        <div>

          <button onClick={createorder}>Enviar</button>

        </div>
      </div>
    </div>
  )

}


export default CartWidget;