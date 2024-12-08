import React from 'react'
import Headershop from '../components/Headershop'
import ShopHero from '../components/ShopHero'
import Products from '../components/Products'
import Productadd from  '../components/Productadd';



const Shop = () => {
  return (
    <div>
        <Headershop />
        <ShopHero />
        <Products />
        <Productadd />
    </div>
  )
}

export default Shop