import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";

// import { rewardAbove5 } from "../Slices/reducer/bonusReducer";


// const {amount}=useSelector((store)=>store.amountRedu);


export const incrementAmountAction = createAction('amount/increment')
export const decrementAmountAction = createAction('amount/decrement')

export const amountAbove100 = createAction('amount/incrementAmount');


const initalState = { amountReward: 0 };


const rewardReducer = createReducer(initalState, (builder) => {

    console.log(builder, "builder")

    builder
        .addCase(incrementAmountAction, (state, action) => {


            // if (state.amountReward > 5) {

            //     rewardAbove5(state.amountReward)
            // }

            state.amountReward += 1;




        })
        .addCase(decrementAmountAction, (state, action) => {

            state.amountReward -= 1;

        })
        .addCase(amountAbove100, (state, action) => {
            console.log("hello world", action.payload);


            if (action.payload >= 10) {
                state.amountReward += 1;

            }


        })

    // .addCase(rewardAbove5, (state, action) => {


    //     if (state.amountReward > 5) {


    //     }



    // })





})
export default rewardReducer;
