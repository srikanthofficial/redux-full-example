import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyBurger } from '../redux/index' 
import { addBurger } from '../redux/index'
import { calcBurger } from  '../redux/index'

function BurgerContainer(props) {
    const [number,setNumber] = useState(1);
    return (
        <div className="container">
        <h1>Number Of Burgers - {props.numOfBurgers}</h1>
        <input type="text" value={number} onChange={e=> setNumber(e.target.value)}/> 
        <button onClick={()=> props.buyBurger(number)}>Buy {number} Burger</button>

        <button onClick={()=> props.addBurger(number)}>Add {number} Burger</button>

        <button onClick={props.calcBurger}>Calc Burgers</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfBurgers: state.burger.numOfBurgers
    }
}

const mapDispatchToProps = dispatch => {
  return {
    buyBurger: number => dispatch(buyBurger(number)),
    addBurger: number => dispatch(addBurger(number)),
    calcBurger: () => dispatch(calcBurger())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,)
    (BurgerContainer)