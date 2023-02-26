
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
        if(!state.selectedItems.find(item=>item.id===action.payload.id)){
          state.selectedItems.push({...action.peyload,quantity:1});
          console.log("ADD");
          console.log(state.selectedItems)
        }
        return { ...state,selectedItems:[...state.selectedItems]};

        
      case 'INCREASE':
        const indexI=state.selectedItems.findIndex((item)=>item.id===action.peyload.id);
        state.selectedItems[indexI].quantity++;
        console.log("INCREASE");
        console.log(state);
        return { ...state,selectedItems:[...state.selectedItems]};
    

        
      case 'REMOVE':
        const newselectedItems =state.selectedItems.filter(item=>item.id!==action.peyload.id);
        console.log("REMOVE");
        console.log(newselectedItems);
        state.selectedItems=newselectedItems;
        return ({ ...state,selectedItems:newselectedItems});
      


      case 'DECREASE':
        const indexJ=state.selectedItems.findIndex((item)=>item.id===action.peyload.id);
        state.selectedItems[indexJ].quantity--;
        return ({...state ,selectedItems:[...state.selectedItems]});
      



      case 'CHECKOUT':
        return{ 
          selectedItems:[],
          itemcounter:0,
          total:0,
          checkout:true,
        };

      case 'CLEAR':
        return{ 
        selectedItems:[],
        itemcounter:0,
        total:0,
        checkout:false,
      };

      default:
        throw new Error();
    }
  }

export const CartContext=createContext()
const CartContextProvider =({children})=>{
    const [state, dispatch] = useReducer(bookreducer, initialState);
    return(
         
                <CartContext.Provider value={{state:state,dispatch:dispatch}}>
                  {children}

                </CartContext.Provider>
    );
};
export default  CartContextProvider;
