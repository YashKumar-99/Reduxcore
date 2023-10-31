import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './features/Todo/index'


const store = configureStore({


    reducer:{
      "Todo":  TodoReducer
    }


})


export default store;