import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Navigate {
  menu: string;
}

const initialState: Navigate = {
  menu: 'home',
};

const navigaterSlice = createSlice({
  name: 'navigate',
  initialState,
  reducers: {
    setMenu(state, action) {
      state.menu = action.payload.menu;
    },
  },
});

export default navigaterSlice.reducer;
export const {setMenu} = navigaterSlice.actions;
