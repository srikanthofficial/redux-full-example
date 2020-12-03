import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux' 

function Test(props) {
    return (
        <div className="container">
        <h1>Number Of IceCreams- {props.numOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
  return {
      buyCake: () => dispatch(buyIceCream())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Test)