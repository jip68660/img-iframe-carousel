import React, { Component } from 'react'
import styles from './carousel.css'

export class Carousel extends Component {
  constructor (props) {
    super(props)
    this.state=({
      index: 0
    })
    this.maxLength = props.images.length
    this.slideToLeft = this.slideToLeft.bind(this)
    this.slideToRight = this.slideToRight.bind(this)
  }
  slideToLeft = () => {
    if (this.state.index === 0) {
      this.setState({
        index: this.maxLength - 1
      })
    }
    else {
      this.setState((prevState)=>({
        index: prevState.index - 1
      }))
    }
  }
  slideToRight = () => {
    if (this.state.index === this.maxLength - 1) {
      this.setState({
        index: 0
      })
    }
    else {
      this.setState((prevState)=>({
        index: prevState.index + 1
      }))
    }
  }

  render() {
    // const { images } = this.props.images
    const imagesList = this.props.images.map((image, index) => {
      if (index == this.state.index) {
        return(
          <img 
            key={ index } 
            className={ `${styles.slides} ${styles.actived}` } 
            src={ image }
          />
        )
      }
      else {
        return(
          <img 
            key={ index } 
            className={ `${styles.slides} ${styles.blurry}`} 
            src={ image } 
          />
         )
      }
    })
    return(
      <div className={ styles.carousel_container }>        
        { imagesList }
        <div>
          <button className={ styles.buttons } onClick={ this.slideToLeft }>left</button>
          <button className={ styles.buttons } onClick={ this.slideToRight }>right</button>
        </div>
      </div>
    )
  }
}