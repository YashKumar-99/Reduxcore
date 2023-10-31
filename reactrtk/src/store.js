import { configureStore } from "@reduxjs/toolkit";
import rewardReducer from "./Reducers/Reward";
import amountSlice from './Slices/reducer/amountReducer';


import bonusReducer from "./Slices/reducer/bonusReducer";
const store = configureStore({

    reducer: {
        amountRedu: amountSlice,
        rewardRedu: rewardReducer,
        bonusRedu:bonusReducer

    }

})

export default store;

