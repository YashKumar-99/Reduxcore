console.log("let's start");



import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import axios from 'axios';

let store = createStore(counter, applyMiddleware(thunk.default));
var Multiply = 'MULTIPLY';


//The counter is reducer funtion here

function counter(state = { amount: 1 }, action) {
    console.log(state, "data")


    if (action.type === 'INCREMENT') {
        console.log(state.amount, "data2")

        return { amount: state.amount + 1 };
    } else if (action.type === 'DECREMENT') {

        //right apporch
        return { amount: state.amount - 1 }; //because it's  making copy of the object


        //wrong approch
        // return amount.action=1; //because it will overwrite the privious state.
    } else if (action.type === 'INCREMENTBYAMOUNT') {


        return { amount: state.amount + action.payload }
    } else if (action.type === Multiply) {


        return { amount: state.amount * action.payload }
    }
    if (action.type === "MULTIPLYBYTWO") {
        console.log("multiplybytwo")


        return { amount: state.amount * action.payload }
    } if (action.type === "CALLAPI") {

        return { amount: action.payload };
    }
    return state;
}


//actions: we can triger the action by using of state . so we have dispatch mehtod for triger it we can say.



//here we are doing simple increment 

//we are trigging action form here...
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });







//create a redux store holding the state of your app 
//it's provide use main three Api which is subscribe ,dispatch and  getState






//To get our state we can call it's by default  method which is getstate




store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

console.log(store.getState())

//It will works  every time when state will get change.

// store.subscribe(() => console.log(store.getState()));

store.subscribe(() => console.log(store.getState(), "HELLO")); //remember you  it will work if state goes change so here you have call dispatch function after this.
// store.dispatch({type:'INCREMENT'})

// store.dispatch({ type: 'INCREMENTBYAMOUNT', payload: 100 })
// console.log(a);



//Now you have noticed we are dispacting action directly. We can make function for dispatch method.



// function increment() {
//     return { type: 'INCREMENT' }
// }


// function decrement() {
//     return { type: 'DECREMENT' }
// }

// store.dispatch(increment())  //Here you can see we are sending the action by function not direactly 






//Now we have next problem which is the name could be miss match which compare them. So souation is next we can make variabe and compoare aciton type by varavale.


//here we are multiplying the value.

function multiply() {
    return { type: Multiply, payload: 4 }
}


store.dispatch(multiply());



//we can send make function aslo like that

function multiplybytwo(getParms) {


    return {
        type: 'MULTIPLYBYTWO',
        payload: getParms
    }
}



//IN normal redux if we will try try to run this calltheapi function so the state will not change becasue redux build for intant state change but here we are using 
// async await function that's way for solve this problem we use redux-thunk middleware .
//it's allows us run methods inside async and await fun.
function calltheapi(id) {
    return async (dispatch) => {
        await axios.get(`http://localhost:3000/accounts/${id}`).then((res) => {
            console.log('ddssfs')
            const { amount } = res.data;
            dispatch({ type: "CALLAPI", payload: amount })
        })
    }
}


// store.dispatch(multiplybytwo(2))
store.dispatch(calltheapi(2))//please note:-in this case done use ()
// console.log(store.getState())









