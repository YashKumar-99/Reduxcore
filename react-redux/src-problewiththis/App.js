import './App.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import amountReducer from './reducer/amount';
import BonusReducer from './reducer/bouns';
import First from './components/First';
import Second from './components/Second';



//IN this example you will learn what's the problem with pure redux . so we are can not do update state of react using redux store state..

const store = createStore(
  combineReducers(
    {
      amountReducer,
      BonusReducer
    }
  )
)
console.log(store)

store.subscribe(() => console.log(store.getState()))


function App() {
  return (

    <>
      <div>HELLO world</div>
      <First store={store} />
      <Second />
    </>


  );
}

export default App;
