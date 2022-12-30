import React from 'react'
import { useState, useEffect } from 'react'


const ComponentsContador = ({ input, setinput }) => {


  const [contador, setcontador] = useState(0)




  const Morecount = () => {

    setcontador(contador + 1)
  }

  const less = () => {
    setcontador(contador - 1)

  }
  return (

    <div>
      {contador}
      <button onClick={Morecount}> suma   </button>
      <button onClick={less}>resta</button>

      <input type="number" value={input} onInput={(evento) => setinput(evento.target.value)}></input>
    </div>
  )
}

export default ComponentsContador