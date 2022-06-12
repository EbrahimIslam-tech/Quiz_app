import { createSlice } from "@reduxjs/toolkit";
import data from "../Components/ModelTest/DemoData";
const qusSlice = createSlice({
  name: "auth",
  initialState: {
    qusData: [],
    data: data,
    selectAns: [],
  },
  reducers: {
    saveQusAns: (state, action) => {
        
      state.qusData.push(action.payload);

      localStorage.setItem("QusAns", JSON.stringify(state.qusData));
    },
    saveSelectedAns: (state, action) => {
      state.selectAns.push(action.payload);

      localStorage.setItem("selectAns", JSON.stringify(state.selectAns));
    },
    correctAnswer: (state, action) => {
        // state.qusData.map
    },
  },
});
export const { saveQusAns, saveSelectedAns } = qusSlice.actions;
export default qusSlice.reducer;
