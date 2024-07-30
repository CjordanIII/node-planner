import { createSlice } from "@reduxjs/toolkit"

export const nodeSlice = createSlice({
  name: 'node',
  initialState: {
    value: []
  },
  reducers: {

    nodeSelecter: (state, action) => {
      console.log(action.payload)
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {  nodeSelecter } = nodeSlice.actions

export default nodeSlice.reducer