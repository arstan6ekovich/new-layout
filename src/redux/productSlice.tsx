import { createSlice } from "@reduxjs/toolkit";



const initialState: any = {
  product: [],  
};


export const ProductSlice = createSlice({
  name: "ADD_PRODUCT",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.product = [...state.product, action.payload];
    },
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
