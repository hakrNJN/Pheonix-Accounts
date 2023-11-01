import { configureStore } from "@reduxjs/toolkit";
import AccountMastReducer from "./Slice/AccountMastSlice";
import errorReducer from './Slice/ErrorSlice';

const store = configureStore({
    reducer: {
        error: errorReducer,
        accountMaster: AccountMastReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),

})

export default store;