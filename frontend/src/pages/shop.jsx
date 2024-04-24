import React from 'react'
import Hero from '../components/Hero/hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offer/Offer'
import NewCollection from '../components/NewCollection/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
const shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollection/>
        <NewsLetter/>
    </div>
  )
}

export default shop

