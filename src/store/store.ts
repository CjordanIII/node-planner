import { configureStore } from "@reduxjs/toolkit";
import nodeReducer from "../features/node/nodeSlice";
export  default configureStore({
    reducer: {
        node: nodeReducer
    }
})


