import { INCREMENT } from "../actions"

function amountReducer(state = { amount: 1 }, action) {

    if (action.type === INCREMENT) {
        console.log('called !!')
        return { amonut: state.amount + 1 }

    }
    return state;


}

export default amountReducer;