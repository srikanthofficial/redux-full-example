import { combineReducers } from "redux";
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import pizzaReducer from './pizza/pizzaReducer'
import BurgerReducer from './burger/burgerReducer'
import UserReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizza: pizzaReducer,
    burger: BurgerReducer,
    user: UserReducer
})

export default rootReducer