import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAmountAction, decrementAmountAction } from '../Reducers/Reward'
const ThirdComp = () => {




    const dispatch = useDispatch()
    useSelector((store) => console.log(store));



    const { amountReward } = useSelector((store) => store.rewardRedu)

    return (
        <div>
            <p>reward:{amountReward}</p>

            <button onClick={() => dispatch(incrementAmountAction(amountReward))}>InCrementAmount</button>
            <button onClick={() => dispatch(decrementAmountAction())}>decrement</button>

        </div>
    )
}

export default ThirdComp