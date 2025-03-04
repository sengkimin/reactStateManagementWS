import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
}

const initialState: UserState = {
  userName: "inin",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const { setUser} = userSlice.actions;
export default userSlice.reducer;
