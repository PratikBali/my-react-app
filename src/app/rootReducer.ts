import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the state
interface ExampleState {
  value: number;
  status: 'idle' | 'loading' | 'completed' | 'error';
}

// Initial state
const initialState: ExampleState = {
  value: 0,
  status: 'idle'
};

// Create the slice
const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

// Export actions and reducer
export const {
  increment,
  decrement,
  incrementByAmount
} = exampleSlice.actions;

export default exampleSlice.reducer;