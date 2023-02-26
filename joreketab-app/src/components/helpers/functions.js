export const Isincart =(state,id)=>{
 console.log("isincart called")
 const result=!!state.selectedItems.find(item=> item.id===id);
 return result;
}


export const Itemconter = (state,id)=>{
    console.log("Itemcuonter called")
    const index = state.selectedItems.findIndex(item=>item.id===id);
   if(index=== -1 ){
    return false
   }else{
    return  state.selectedItems[index].quantity;
   }


}