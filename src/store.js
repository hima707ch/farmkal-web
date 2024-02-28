import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import productSlice from './slices/products';

const store = configureStore({
    reducer : {
        user : userSlice,
        products : productSlice
    }
})

export default store;