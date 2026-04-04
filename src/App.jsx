import React from 'react'
import Header from './UI/Header'
import Hero from './components/Hero'
import Body from './components/Body'
import Offer from './components/Offer'
import Faq from './components/Faq'
import NewsLetter from './components/NewsLetter'
import Footer from './UI/Footer'
import ImagesRaw from './components/ImagesRaw'

const App = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <ImagesRaw/>
   <Body/>
   <Offer/>
   <Faq/>
   <NewsLetter/>
   <Footer/>
   
   </>
  )
}

export default App
