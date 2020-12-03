import { BUY_PIZZA } from './pizzaTypes'

const intialPizzas = {
 numOfPizzas: 30
}

const pizzaReducer = (state=intialPizzas,action) =>{
 switch(action.type) {
     case BUY_PIZZA: return {
         ...state,
         numOfPizzas: state.numOfPizzas - 1
     }
     default: return state
 }
}

export default pizzaReducer