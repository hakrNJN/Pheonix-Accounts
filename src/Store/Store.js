import { configureStore } from "@reduxjs/toolkit";
import errorReducer from './Slice/ErrorSlice';

const store = configureStore({
    reducer: {
        error: errorReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),

})

export default store;