import React, { Component } from 'react'
import styles from './carousel.css'

export class Carousel extends Component {
  constructor (props) {
    super(props)   
    this.maxLength = props.images.length 
    this.state=({
      index: 0,
      last: this.maxLength - 1,
      next: 1
    })
    this.slideToLeft = this.slideToLeft.bind(this)
  }
  slideToLeft = () => {
    if (this.state.index === 0) {
      this.setState((prevState) => ({
        index: this.maxLength - 1,
        last: prevState.last - 1,
        next: prevState.next - 1
      }))
    }
    else if (this.state.index === 1) {
      this.setState((prevState) => ({
        index: prevState.index - 1,
        last: this.maxLength - 1,
        next: prevState.next - 1
      }))
    }
    else if (this.state.index === this.maxLength - 1) {
      this.setState((prevState) => ({
        index: prevState.index - 1,
        last: prevState.last - 1,
        next: this.maxLength - 1
      }))
    }
    else {
      this.setState((prevState)=>({
        index: prevState.index - 1,
        last: prevState.last - 1,
        next: prevState.next - 1
      }))
    }
  }
  slideToRight = () => {
    if (this.state.index === this.maxLength - 1) {
      this.setState((prevState) => ({
        index: 0,
        last: prevState.last + 1,
        next: prevState.next + 1
      }))
    }
    else if (this.state.index === this.maxLength - 2) {
      this.setState((prevState) => ({
        index: prevState.index + 1,
        last: prevState.last + 1,
        next: 0
      }))
    }
    else if (this.state.index === 0) {
      this.setState((prevState) => ({
        index: prevState.index + 1,
        last: 0,
        next: prevState.next + 1
      }))
    }
    else {
      this.setState((prevState)=>({
        index: prevState.index + 1,
        last: prevState.last + 1,
        next: prevState.next + 1
      }))
    }
  }

  render() {
    // const { images } = this.props.images
    console.log(`${this.state.last} ${this.state.index} ${this.state.next}`)
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