import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plate } from "../../models/plate";

type CarrinhoState = {
  items: Plate[]
}

const initialState: CarrinhoState = {
  items: [],
}

const carrinhoReducer = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Plate>)=>{
      const plate = action.payload
      if(state.items.find(plate => plate.id === action.payload.id)){
        alert("este itrem já está no carrinho"!);
      }else{
        state.items.push(plate);
      }
    }
  }
})

export const {adicionar} = carrinhoReducer.actions;
export default carrinhoReducer.reducer
