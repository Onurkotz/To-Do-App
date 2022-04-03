import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [
      {
        id: "1",
        title: "Meet friends",
        complete: false,
      },
      {
        id: "2",
        title: "CODE!",
        complete: false,
      },
    ],
  },
  reducers: {
    newAdd: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.complete = !item.complete
    },
  },
});

export const { newAdd, toggle } = todoSlice.actions;
export default todoSlice.reducer;
