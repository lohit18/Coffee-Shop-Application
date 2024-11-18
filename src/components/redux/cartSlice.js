import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}

export const cartSlice = createSlice({
    name: 'cart',

    initialState,

    reducers:{
        addToCart : (state, action) => {
            state.value.push(action.payload)
        },

        removeFromCart : (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload.id);
        }
    }
})


export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer