import { configureStore } from "@reduxjs/toolkit";
import AccountMastReducer from "./Slice/AccountMastSlice";
import AuthReducer from "./Slice/AuthSlice";
import errorReducer from './Slice/ErrorSlice';

const store = configureStore({
    reducer: {
        error: errorReducer,
        accountMaster: AccountMastReducer,
        authentication: AuthReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),

})

export default store;