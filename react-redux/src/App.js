import './App.css';
import React from 'react';
import First from './components/First';
import Second from './components/Second';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { incrementBonusByAmount } from './actions';





// store.subscribe(() => console.log(store.getState()))


function App() {

  const { amountReducer } = useSelector((store) => store);
  console.log(useSelector((store) => store), "amountReducer...");

  const dispatch = useDispatch();



  useEffect(() => {

    console.log(amountReducer.amount ,"check..")

    if (amountReducer.amount > 1000) {
      console.log("useEffect called!!")


      dispatch(incrementBonusByAmount())
    }

  }, [amountReducer.amount])




  return (


    <>
      <div>HELLO world</div>



      {/* one way to complete this */}

      {/* {(() => {


        if (amountReducer.padding) {
          return <p> data is loading...</p>
        } else if (amountReducer.success) {
          return <p> Data facted succesfully...</p>
        }else if (amountReducer.err) {
          return <p> error occured!!...</p>
        }

      })()} */}



      {/* seconnd way to do it. */}



      {(amountReducer.padding) ? (<p>Wait , Guys data is panding now...</p>) : (amountReducer.success) ? (<p>Data facted successfully !!</p>) : (amountReducer.err) ? (<p>OOps !! page not found 404.</p>) : null}





      <First />
      <Second />
    </>



  );
}

export default App;
