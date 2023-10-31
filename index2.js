import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const INCREMENT = 'action/increment';
const GETREQESTPANDDING = 'action/getUserPendding';
const GETREQUESTFULLFILLED = 'action/getUserFullFILLED';
const GETREQESTREJECTED = 'action/getUserRejected'
const INCBONUS = 'action/bonusInc';
const store = createStore(combineReducers({ amountReducer, bonusReducer }), applyMiddleware(thunk.default));

//Here we have combined two reducer using combineReducers function..

function amountReducer(state = { amount: 1 }, action) {

    if (action.type === INCREMENT) {

        return { amount: state.amount + 1 }

    }
    if (action.type === GETREQESTPANDDING) {

        return { ...state, pandding: true, message: 'Data is Loading...!!' }

    }
    if (action.type === GETREQUESTFULLFILLED) {

        return { ...state, amount: action.payload, message: 'Date fatched.. !!' }

    }
    if (action.type === GETREQESTREJECTED) {

        return { ...state, pandding: false, message: 'Api Failed' }

    }
    return state;



}


function increment() {

    return { type: INCREMENT }
}

function userPenddingRequest() {
    return { type: GETREQESTPANDDING }
}

function getUserFullfuilled(amount) {
    return { type: GETREQUESTFULLFILLED, payload: amount }
}
function getUserRejected() {


    return { type: GETREQESTREJECTED }
}

function callTheApi(id) {


    return async (dispatch) => {

        try {
            dispatch(userPenddingRequest());

            await axios.get(`http://localhost:3000/accounts/${id}`).then((res) => {




                const amount = res.data.amount;
                dispatch(getUserFullfuilled(amount));
                dispatch(BonusInc());//just think about this function. how it's working.







            })

        } catch (error) {
            dispatch(getUserRejected())

        }





    }

}


store.dispatch(increment())
store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch(increment())
// store.dispatch(increment())
store.dispatch(callTheApi(2));



//now suppose you have a another object for handle so you have creae new reducer function for this.




function bonusReducer(state = { bonus: 1 }, aciton) {

    if (aciton.type === INCBONUS && aciton.payload > 100) {
        return { bonus: state.bonus + 1 }

    }
    return state;


}


function BonusInc() {


    const HighValue = store.getState().amountReducer.amount;
    console.log(HighValue)

    return { type: INCBONUS, payload: HighValue }

}





