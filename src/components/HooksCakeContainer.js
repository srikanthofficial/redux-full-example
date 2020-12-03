import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = (props) =>  {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
   return (
       <div>
       <h1>Num of Cakes - {numOfCakes}</h1>

       <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
       </div>
   )
}


export default HooksCakeContainer