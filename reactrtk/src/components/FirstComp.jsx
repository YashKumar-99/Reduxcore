import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAmount, decrementAmount } from '../Slices/reducer/amountReducer';
import { useEffect } from 'react';


const FirstComp = () => {


    const dispatch = useDispatch()
    useSelector((store) => console.log(store));

    const { amount } = useSelector((store) => store.amountRedu);
   



    return (
        <div>
            <p>amount:{amount}</p>

            <button onClick={() => dispatch(incrementAmount(amount))}>InCrementAmount</button>
            <button onClick={() => dispatch(decrementAmount())}>DeCrementAmount</button>

        </div>
    )
}

export default FirstComp