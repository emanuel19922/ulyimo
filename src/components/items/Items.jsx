import '../items/_items.scss'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


const Items = ({produs}) => {



  return (
    <Link  to={`/filter/${produs.id}`}>
    <div className='ItemsProduct'>
   
        <h2>{produs.id}</h2>
        <h2>{produs.name}</h2>
        <h2>{produs.color}</h2>
        <button >hola</button>
       
      </div>
      </Link>
  )
}

export default Items