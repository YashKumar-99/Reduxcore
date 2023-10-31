import { INCBONUS } from "../actions";



function BonusReducer(state = { bonus: 1 }, action) {

    if (action.state === INCBONUS) {
        return { bonus: state.bonus + 1 }
    }


    return state;
}

export default BonusReducer;
