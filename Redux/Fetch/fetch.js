import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'Card',
  initialState: {
    cards: [],
    search: 'laptop',
  },
  reducers: {
    displayData: (state, action) => {
        state.cards = action.payload
      },
      searchPorduct: (state, action) => {
        state.search = action.payload
      }
    
  }
})

// Action creators are generated for each case reducer function
export const { displayData, searchPorduct } = cardSlice.actions

export const fetchUpdater =  cardSlice.reducer