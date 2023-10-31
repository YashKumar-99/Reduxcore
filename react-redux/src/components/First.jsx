import React from 'react'

import { incrementAmount } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { callTheApi } from '../actions';
const First = () => {





    const { amount } = useSelector((store) => store.amountReducer);
    const dispatch = useDispatch();


    console.log(amount, "amount")

    return (

        <>
            <div>First</div>
            <div>amount = {amount}</div>


            <button onClick={() => dispatch(incrementAmount())}>amount</button>
            <button onClick={() => dispatch(callTheApi())}> call</button>


        </>



    )
}

export default First