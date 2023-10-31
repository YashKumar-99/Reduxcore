import React from 'react';
import { useSelector } from 'react-redux';

const Second = () => {

  const { BonusReducer } = useSelector((store) => store)
  // console.log(bonus, "bonus..")

  return (

    <>
      <div>Second</div>


      <h2>Bonus:{BonusReducer.bonus}</h2>
    </>

  )
}

export default Second