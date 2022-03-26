import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [
      {
        id: "1",
        title: "Arkadaşlarla buluşma",
        complete: false,
      },
      {
        id: "2",
        title: "Kodlama çalış",
        complete: false,
      },
    ],
  },
  reducers: {},
});

export default todoSlice.reducer;
