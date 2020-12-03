import { 
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAIL
 } from "../user/userTypes";

 const intialState = {
     loading: true,
     users: [],
     error: ''
 }

 const userReducer = (state = intialState, action) => {
   switch(action.type) {
       case FETCH_REQUEST: return {
        ...state,
        loading: true
       }
       case FETCH_SUCCESS: return {
           loading: false,
           users: action.payload,
           error: ''
    }
    case FETCH_FAIL: return {
        loading: false,
        users: [],
        error: action.payload
    }
    default: return state
   }
 }

 export default userReducer