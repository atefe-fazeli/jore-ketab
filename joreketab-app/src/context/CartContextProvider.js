
import React,{ createContext, useReducer } from "react";



const initialState={
  selectedItems:[],
  itemcounter:0,
  total:0,
  checkout:false,

}


function bookreducer(state,action) {
    switch (action.type) {
      case 'ADD':
        state.selectedItems.push({...action.peyload,quantity:1});
        return { ...state,...state.selectedItems};
      case 'INCREASE':
       state.selectedItems.map((item)=>item.id===action.peyload.id?item.quantity + 1)

        
      case 'REMOVE':
        return { isRunning: false, time: 0 };
      case 'DECREASE':
        return { ...state, time: state.time + 1 };
      case 'CHECKOUT':
        return { ...state, time: state.time + 1 };
      case 'CLEAR':
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }

const CartContext=createContext()
const CartContextProvider =({children})=>{
    const [state, dispatch] = useReducer(bookreducer, initialState);
    return(
         
                <CartContext.Provider value={{state:state,dispatch:dispatch}}>
                  {children}

                </CartContext.Provider>
    );
};
export default  CartContextProvider;
