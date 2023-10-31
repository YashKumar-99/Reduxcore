import React from 'react'

import { incrementAmount } from '../actions'

const First = ({ store }) => {
    return (

        <>
            <div>First</div>
            <div>amount = {store.getState().amountReducer.amount} </div>


            <button onClick={() => store.dispatch(incrementAmount())}>amount</button>


        </>



    )
}

export default First