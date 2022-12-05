import React from 'react'
import { useState,useEffect } from 'react'


const ComponentsContador = () => {
useEffect(()=>{ },[]) 

  const[contador,setcontador]= useState(0)

  const Morecount = () =>{
    
    setcontador(contador + 1 )
  }

  const less = () =>{
    setcontador(contador - 1)
  }
  return (
   
    <div><h1>{contador}</h1>
     
    <button onClick= { Morecount }></button>
    <button onClick= {less }>resta</button>
    </div>
  )
}

export default ComponentsContador