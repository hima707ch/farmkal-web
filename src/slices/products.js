import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name : "product",
    initialState : {
        allProduct : {},
        categoryProduct : {},
        cityProduct : {},
        isLoading : false
    },
    reducers : {
        setAllProduct : (state, action) => {
            state.allProduct = action.payload;
        },
        setCategoryProduct : (state, action) => {
            state.categoryProduct = action.payload;
        },
        setCityProduct : (state, action) => {
            state.cityProduct = action.payload;
        },
        

    }
})

export const { setAllProduct, setCategoryProduct, setCityProduct } = productSlice.actions;
export default productSlice.reducer;