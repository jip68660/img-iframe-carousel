import React, { Component } from 'react'
import styles from './carousel.css'

export class Carousel extends Component {
  constructor (props) {
    super(props)   
    this.maxLength = props.sources.length 
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
    var  marginForWidth= this.props.width * 0.3;
    var marginForHeight = this.props.height * 0.2;

    var activedDimension = { 
      width: this.props.width,
      height: this.props.height
    }
    var blurryDimension = {
      width: this.props.width - marginForWidth,
      height: this.props.height - marginForHeight,
      marginTop: marginForHeight * 0.5
    }
    var marginForLast = {
      marginLeft: -blurryDimension.width + marginForWidth
    }
    var marginForNext = {
      marginLeft: -marginForWidth
    }

    const sourcesList = this.props.sources.map((image, index) => {
      if (index == this.state.index) {
        return(
          <img // < `{props.TYPES}` /> //react img syntax: not html syntax
            key={ 2 } 
            style={ activedDimension }
            className={ `${styles.slides} ${styles.actived}` } 
            src={ image }
          />
        )
      }
      else if (index == this.state.last) {
        return(
          <img 
            key={ 1 } 
            style={{ ...blurryDimension, ...marginForLast }}
            className={ `${styles.slides} ${styles.blurry} ${styles.last}`} 
            src={ image } 
            onClick={ this.slideToLeft }
          />
        )
      }
      else if (index == this.state.next) {
        return(
          <img 
            key={ 3 } 
            style= {{ ...blurryDimension, ...marginForNext }}
            className={ `${styles.slides} ${styles.blurry} ${styles.next}`} 
            src={ image } 
            onClick={ this.slideToRight }
          />
        )
      }
    })
    sourcesList.sort((a,b) => a.key - b.key)

    return(
      <div className={ styles.carousel_container }>   
        { sourcesList }
      </div>
    )
  }
}