import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface ShoppingItem {
  item: string[]; 
}

const initialState: ShoppingItem = {
  item: ["Milk", "Bread"],
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data.map((task: { title: string }) => task.title);
});

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.item.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.item.push(...action.payload);
    });
  },
});

export const { addItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
