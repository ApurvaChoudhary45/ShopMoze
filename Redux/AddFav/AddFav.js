import { createSlice } from '@reduxjs/toolkit'

export const AddFav = createSlice({
  name: 'favorite',
  initialState: {
    addfav: [],
    value: 0
  },
  reducers: {
   
    addFavorite: (state, action) => {
        const id = action.payload
        if(state.addfav.includes(id)){
          state.addfav = state.addfav.filter((item) => item !== id)
      }
      else{
          state.addfav.push(id)
      }
    },
    increment : (state) => {
      state.value += 1
    },
  }
})

// Action creators are generated for each case reducer function
export const { addFavorite, increment } = AddFav.actions

export const AddFavoriteRed =  AddFav.reducer