import React from 'react'
import '../ItemsListContainer/_ItemsListContainer.scss'

const ItemsListContainer = (props) => {
  return (
    <div className='message-greeting-container'>
        <h2 className='message'> {props.name} </h2>
    </div>
  )
} 

export default ItemsListContainer