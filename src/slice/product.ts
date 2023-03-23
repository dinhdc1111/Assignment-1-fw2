import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();
        return data;
    }
);
export const createProducts = createAsyncThunk(
    "product/createProducts",
    async () => {
        const res = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        const data = await res.json();
        return data;
    }
);
const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builer) => {
        builer
            // List
            .addCase(fetchProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.value = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = true;
            })
            // add
            .addCase(createProducts.fulfilled, (state, action) => {
                state.value.push(action.payload);
                state.isLoading = false;
            })
    },
});
export default productSlice.reducer;
