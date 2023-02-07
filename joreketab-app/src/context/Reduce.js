import React,{ useReducer } from "react";


const initialState=[{
    name:"",
    img:"",
    id:"",
    price:"",
    count:"",
    chekout:"",

}
]

function reducer(state,action) {
    switch (action.type) {
      case 'ADD':
        return { ...state, isRunning: true };
      case 'INCREASE':
        return { ...state, isRunning: false };
      case 'REMOVE':
        return { isRunning: false, time: 0 };
      case 'DECREASE':
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }

const Reduce =()=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
             <button onClick={() => dispatch({ type: 'ADD' })}></button>
             <button onClick={() => dispatch({ type: 'REMOVE' })}></button>
             <button onClick={() => dispatch({ type: 'INCREASE' })}></button>
             <button onClick={() => dispatch({ type: 'DECREASE' })}></button>
        </div>
    );
};
export default Reduce;
