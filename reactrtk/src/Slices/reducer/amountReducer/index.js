import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    amount: 1,
}



const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        incrementAmount: (state) => {
            console.log("enterd!!",state.amount)

            state.amount += 1;
        },
        decrementAmount: (state) => {

            state.amount -= 1;
        }
    }

})


//  function amountReduce(state = { amount: 1 }) {


//     return state;

// }


console.log(amountSlice,"test")

export const { incrementAmount, decrementAmount } = amountSlice.actions;
export default amountSlice.reducer;

