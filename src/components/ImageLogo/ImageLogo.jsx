import React from 'react'
import imagelogo from '../../assets/navimage-imagelogo.png'
import '../ImageLogo/_ImageLogo.scss'



 export const ImageLogo = props => {
  return (
    <div >
        <img className='image-logo-nav' src={imagelogo} alt="" />
    </div>
  )
}



export default ImageLogo;