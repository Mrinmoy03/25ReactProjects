import React from 'react'
import Accordian from './components/01accordian/Accordian'
import RandomColor from './components/02random-color/RandomColor'
import Starrating from './components/03StarRating/StarRating'
import { ImageSlider } from './components/04image-slider/ImageSlider'

const App = () => {
  return (
    <>
    <Accordian/>
    <RandomColor/> 
    <Starrating/>
    <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}/>
    
    </>
  )
}

export default App