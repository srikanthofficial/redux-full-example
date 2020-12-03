import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/index' 

function IceCreamContainer(props) {
    return (
        <div className="container">
        <h1>Number Of IceCreams - {props.numOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
  return {
      buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (IceCreamContainer)