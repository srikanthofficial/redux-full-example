import axios from 'axios'
import { 
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAIL
 } from "../user/userTypes";

 export const fetchRequest = () =>{
  return {
      type: FETCH_REQUEST
  }
 }
 export const fetchSuccess = users =>{
    return {
        type: FETCH_SUCCESS,
        payload: users
    }
}
export const fetchFail = error =>{
    return {
        type: FETCH_FAIL,
        payload: error
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchRequest)
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(response=>{
        const users = response.data
        dispatch(fetchSuccess(users))
    }).catch(error => {
        const errormsg = error.message;
        dispatch(fetchFail(errormsg))
    })
    }
}