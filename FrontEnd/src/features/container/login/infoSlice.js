import inforApi from "../../../api/inforApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const infoData = createAsyncThunk("infos/infoData", async () => {
  const info = await inforApi.infor();
  return info;
});
const infoSlice = createSlice({
  name: "infos",
  initialState: {
    info: [],
    loading: true,
    error: "",
  },
  reducers: {
    addInfo: (state, action) => {
      inforApi.postinfor(action.payload);
    },
    removeInfo: (state, action) => {
      inforApi.deleteinfor(action.payload);
    },
    updateInfo: (state, action) => {
      inforApi.editinfor(action.payload);
    },
  },
  extraReducers: {
    [infoData.pending]: (state) => {
      state.loading = true;
    },
    [infoData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
    [infoData.fulfilled]: (state, action) => {
      state.loading = false;
      state.infor = action.payload;
    },
  },
});

const { reducer, actions } = infoSlice;
export const { addInfo, removeInfo, updateInfo } = actions;

export default reducer;
