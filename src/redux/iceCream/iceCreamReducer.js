 import { BUY_ICECREAM } from './iceCreamTypes'

 const intialIceCreams = {
     numOfIceCreams: 20
 }

 const iceCreamReducer = (state= intialIceCreams,action) =>{
      switch(action.type) {
          case BUY_ICECREAM: return {
              ...state,
              numOfIceCreams: state.numOfIceCreams - 1
          }
          default: return state
      }
 }

 export default iceCreamReducer