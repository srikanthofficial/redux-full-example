import {BUY_BURGER} from '../burger/burgerType'
import {ADD_BURGER} from '../burger/burgerType'
import {CALC_BURGER} from '../burger/burgerType'

export const buyBurger = (number=1) =>{
    return {
        type: BUY_BURGER,
        payload: number
    }
}
export const addBurger = (number=1) =>{
    return {
        type: ADD_BURGER,
        payload: number
    }
}
export const calcBurger = () =>{
    return {
        type: CALC_BURGER
    }
}

//export default buyBurger