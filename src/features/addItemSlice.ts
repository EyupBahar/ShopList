import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type AddProductState = {
  loading: boolean;
  error: string;
};

const initialState: AddProductState = {
  loading: false,
  error: "",
};

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (values: any) => {
    return fetch("https://upayments-studycase-api.herokuapp.com/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjYwNjc5NDM4LCJleHAiOjE2NjExMTE0Mzh9.MYCv0frK5e6DMcr-4bHUfo6EFx74NXlthJkW9hvzwvg"}`,
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }
);

export const addItem = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(addProduct.pending, (state: AddProductState) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state: AddProductState) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addProduct.rejected, (state: AddProductState) => {
      state.loading = false;
      state.error = "Failed to load";
    });
  },
});

export default addItem.reducer;
