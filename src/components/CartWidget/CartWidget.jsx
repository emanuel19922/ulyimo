import React from 'react'
import logocarrito from '../../assets/navimage-shipments.png'
import '../CartWidget/_CartWidget.scss'

export const CartWidget = () => {
  return (
    <div className='navigation-logopng'>
<img className='navigation-logo' src={logocarrito} alt="" />
    </div>
  )
}


export default CartWidget;