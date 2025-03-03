import { configureStore } from "@reduxjs/toolkit";
import reducer from "src/redux/rootReducer";
import logger from 'redux-logger';

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger as any),
});

export type AppDispatch = typeof store.dispatch
export default store;