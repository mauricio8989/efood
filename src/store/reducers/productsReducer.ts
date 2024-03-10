import { createSlice } from "@reduxjs/toolkit";
import { Plate } from "../../models/plate";

type ProductState = {
  items: Plate[]
}

const initialState: ProductState = {
  items: [],
}

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {}
})

export default productReducer.reducer
