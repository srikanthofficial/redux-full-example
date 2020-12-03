import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index' 

function CakeContainer(props) {
    return (
        <div className="container">
        <h1>Number Of Cakes - {props.numOfCakes}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
  return {
      buyCake: () => dispatch(buyCake())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CakeContainer)