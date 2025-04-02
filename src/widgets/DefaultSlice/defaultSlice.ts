import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Pratik',
    greeting: 'Hello',
}
const defaultSlice = createSlice({
    name: 'defaultSlice',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
            return state;
        }
    },
});

export const defaultSliceActions = defaultSlice.actions;
export default defaultSlice.reducer;