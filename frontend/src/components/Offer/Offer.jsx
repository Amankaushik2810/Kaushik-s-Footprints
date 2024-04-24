import React from 'react'
import './offers.css'
import exclucive_image from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>OFFER FOR YOU</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='offers-left-button'>check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclucive_image}alt=''/>
      </div>
    </div>
  )
}

export default Offer
