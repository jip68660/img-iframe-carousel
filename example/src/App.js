import React, { Component } from 'react'
import './App.css'
import { Carousel } from 'img-iframe-carousel'
import image1 from './1.jpeg'
import image2 from './2.jpeg'
import image3 from './3.jpeg'
import image4 from './4.jpg'
import image5 from './5.jpg'
import image6 from './download.jpeg'

export default class App extends Component {
  render () {
    const images = [image1, image2, image3, image4, image5, image6]

    return (
      <div className='container'>
        <Carousel images={ images } />
      </div>
    )
  }
}
