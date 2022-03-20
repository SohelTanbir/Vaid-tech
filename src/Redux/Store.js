// application state store

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Reducer/CounterReducer";



export const store = configureStore({reducer:CounterReducer});
console.log(store.getState());

