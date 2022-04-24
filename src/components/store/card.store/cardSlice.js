import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardItems : [],
    cardTotalQuantity: 0,
    cardTotalAmount: 0,
}
 

 const cardSlice = createSlice({
     name : 'card',
     initialState,
     reducers:{
         ADD_TO_CARD : (state , action)=>{
             const itemIndex = state.cardItems.findIndex(item => item.id === action.payload.id);
             if (itemIndex >= 0){
                 state.cardItems[itemIndex].cardQuantity +=1;
             
             }
             else{
                state.cardItems.push({...action.payload,cardQuantity: 1});

             }
             state.cardTotalQuantity+=1

         }
     }
 })

 export const {ADD_TO_CARD} = cardSlice.actions

 export default cardSlice.reducer ;

export const getTotoleItems = ({entities})=>(
    entities.card.cardTotalQuantity
)