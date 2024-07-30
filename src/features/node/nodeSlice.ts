import { createSlice } from "@reduxjs/toolkit"

export const nodeSlice = createSlice({
  name: 'node',
  initialState: {
    value: {nameOfNode:""}
  },
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value = 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    nodeSelecter: (state, action) => {
      console.log(action.payload)
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {  nodeSelecter } = nodeSlice.actions

export default nodeSlice.reducer