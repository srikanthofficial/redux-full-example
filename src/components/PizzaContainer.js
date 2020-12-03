import React from 'react'
import { connect } from 'react-redux'
import { buyPizza } from '../redux/index' 

function PizzaContainer(props) {
    return (
        <div className="container">
        <h1>Number Of Pizzas - {props.numOfPizzas}</h1>
        <button onClick={props.buyPizza}>Buy Pizza</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfPizzas: state.pizza.numOfPizzas
    }
}

const mapDispatchToProps = dispatch => {
  return {
      buyPizza: () => dispatch(buyPizza())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (PizzaContainer)