import { createSlice, createAsyncThunk, thunkAPI, createSelector, createAction } from "@reduxjs/toolkit";
import axios from "axios";





//let see how simple is make reducer and aciton using createslice in redux toolkit...

export const rewardAbove5 = createAction('amount/increment')

const initialState = {
    bonus: 0
}


export const FatchData = createAsyncThunk('action/userfatchdata',

    async (thunkAPI) => {


        try {
            const res = await axios.get('http://localhost:3000/accounts/1')
            return res.data.amount;
        } catch (error) {
            const { message } = error;
            throw new Error(message)

        }



    }

)




const bonusSlice = createSlice({

    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.bonus += 1;
        },
        decrement: (state) => {
            state.bonus -= 1;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(FatchData.pending, (state, action) => {
            state.pending = true;

        })
        builder.addCase(FatchData.fulfilled, (state, action) => {

            state.bonus = action.payload;
            state.pending = false;

        })
        builder.addCase(FatchData.rejected, (state, action) => {
            console.log(action.error.message, "payloadddd")

            state.pending = false;
            state.error = action.error.message || "error occure!!"

        })
        builder.addCase(rewardAbove5, (state, action) => {
            console.log("entered reqared5", action.payload)



            if (action.payload >= 5) {
                state.bonus += 50;

            }
        })
    }
})




// console.log(createSlice, "createSliceWhatWeHave..")

export const { increment, decrement } = bonusSlice.actions;

export default bonusSlice.reducer;