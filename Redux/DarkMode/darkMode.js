import { createSlice } from '@reduxjs/toolkit'

export const darkMode = createSlice({
  name: 'darkmode',
  initialState: {
    mode: false
  },
  reducers: {
    
    darkModee: state => {
      state.mode = !state.mode
    },
    
  }
})

// Action creators are generated for each case reducer function
export const {darkModee } = darkMode.actions

export const switchMode =  darkMode.reducer