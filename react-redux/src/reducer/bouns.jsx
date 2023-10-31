import { INCBONUS } from "../actions";

import { INCREMENTAMOUNTBYBONUS } from "../actions";



function BonusReducer(state = { bonus: 1 }, action) {
    if (action.type === INCREMENTAMOUNTBYBONUS ) {
        return { bonus: state.bonus + 1 }
    }
    return state;
}

export default BonusReducer;
