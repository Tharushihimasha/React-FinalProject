import React from 'react'
import Hero from '../components/body/Hero'
import Popular from '../components/body/Popular'
import Offer from '../components/body/Offer'
import NewCollection from '../components/body/NewCollection'
import NewsLetter from '../components/body/NewsLetter'

function Home() {
  return (
   <>
     <Hero />
     <Popular /> 
     <Offer />
     <NewCollection/>
     <NewsLetter />
   </>
  )
}

export default Home