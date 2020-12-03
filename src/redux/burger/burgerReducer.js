import {BUY_BURGER} from '../burger/burgerType'
import {ADD_BURGER} from '../burger/burgerType'
import {CALC_BURGER} from '../burger/burgerType'

 const intialBurger = {
    numOfBurgers: 40
}

 const burgerReducer = (state = intialBurger, action) =>{
  switch(action.type) {
      case BUY_BURGER: return {
          numOfBurgers: state.numOfBurgers - action.payload
      }
      case ADD_BURGER: return {
        numOfBurgers: state.numOfBurgers + action.payload
    }
    case CALC_BURGER: return {
        numOfBurgers: state.numOfBurgers + 2 + 5 + 4 * 5
    }
      default: return state
  }
}

export default burgerReducer