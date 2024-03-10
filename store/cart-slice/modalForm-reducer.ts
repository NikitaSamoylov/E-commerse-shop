import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const modalFormSlice = createSlice({
  name: '@@modal',
  initialState,
  reducers: {
    handleFormState: (state) => {
      return state = !state
    }
  }
});

export const { handleFormState } = modalFormSlice.actions;