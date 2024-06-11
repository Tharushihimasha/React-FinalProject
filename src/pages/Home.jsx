import React from 'react'
import Hero from '../components/body/Hero'
import Popular from '../components/body/Popular'
import Offer from '../components/body/Offer'
import NewCollection from '../components/body/NewCollection'

function Home() {
  return (
   <>
     <Hero />
     <Popular /> 
     <Offer />
     <NewCollection/>
   </>
  )
}

export default Home