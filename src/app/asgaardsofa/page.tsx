import React from 'react'
import Headershop from '../components/Headershop'
import Asgaard from '../components/Asgaardhero'
import Asgaardproducts from '../components/Asgaardproducts'
import Productasgaard from './Productasgaard'
import Asgaardrelatedprod from '../components/Asgaardrelatedprod'

const AsgaardPage = () => {
  return (
    <div>
      <Headershop />
      <Asgaard />
      <Productasgaard />
      <Asgaardrelatedprod />

    </div>
  )
}

export default AsgaardPage