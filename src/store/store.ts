import { configureStore } from "@reduxjs/toolkit";
import defaultReducer from '../widgets/DefaultSlice/defaultSlice';

const store = configureStore({
    reducer: {
        // Add reducers here
        defaultSlice: defaultReducer,
    },
});

export default store;

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppStoreState = ReturnType<typeof store.getState>
export type AppStoreDispatch = typeof store.dispatch