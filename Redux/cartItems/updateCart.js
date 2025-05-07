import { createSlice } from '@reduxjs/toolkit'
import { removeItem } from 'framer-motion';

export const updateCart = createSlice({
  name: 'counter',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const existingItem = state.items.find(i => i.id === item.id);
      if(!existingItem){
        state.items.push(item)
      }
    },
    removeItems: (state, action) =>{
        state.items = state.items.filter((item) => item.id !== action.payload)
    }

    
}})

// Action creators are generated for each case reducer function
export const { addItem,  removeItems } = updateCart.actions

export const itemReducer =  updateCart.reducer