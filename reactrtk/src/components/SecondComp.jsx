import React from 'react';
import { increment, decrement } from '../Slices/reducer/bonusReducer';
import { useSelector, useDispatch } from 'react-redux';

import { FatchData } from '../Slices/reducer/bonusReducer';

const SecondComp = () => {


  const { bonusRedu } = useSelector((store) => store);
  const dispatch = useDispatch();



  return (


    <div style={{ border: "1px solid #353632", padding: '5%' }}>



      <b>Getting Data from api</b>

      {bonusRedu.pending ? ('Data is loading...!!') : bonusRedu.success ? (bonusRedu.bonus) : bonusRedu.error ? ('error occured!!') : null}
      <h5>Bonus:{bonusRedu.bonus}</h5>


      <button type='button' onClick={() => dispatch(decrement())}>decrease bonus</button>
      <button type='button' onClick={() => dispatch(increment())}>increase bonus</button>
      <button type='button' onClick={() => dispatch(FatchData())}>Fatch BonusApi</button>

    </div>

  )
}

export default SecondComp