import { configureStore } from "@reduxjs/toolkit";
import trainerName from './slices/trainerName.slices'

const store = configureStore({
    reducer:{
        trainerName
    }
})

export default store;
