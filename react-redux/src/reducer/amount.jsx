import { INCREMENT } from "../actions"
import { PADDINGAMOUNTAPI, FULLFILLEDAMOUNTAPI, REJECTEDAMOUNTAPI } from "../actions";
import { incrementBonusByAmount } from "../actions";



function amountReducer(state = { amount: 1 }, action) {



    if (action.type === INCREMENT) {
        console.log('called !!', state)
        return { amount: state.amount + 1 }

    }
    if (action.type === PADDINGAMOUNTAPI) {
        return { ...state, padding: true }

    }
    if (action.type === FULLFILLEDAMOUNTAPI) {
        return { amount: action.payload, padding: false, success: true }

    }
    if (action.type === REJECTEDAMOUNTAPI) {
        return { ...state, padding: false, err: true }

    }
  


    return state;


}

export default amountReducer;