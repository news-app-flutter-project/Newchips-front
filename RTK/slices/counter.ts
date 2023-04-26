import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    countUp(state) {
      state.count += 1;
    },
    countDown(state) {
      state.count -= 1;
    },
  },
});

export default counterSlice.reducer;
export const {countUp, countDown} = counterSlice.actions;
