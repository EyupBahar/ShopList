import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  products: any;
  selectedProduct: any;
  loading: boolean;
  error: string;
};

const initialState: ProductState = {
  products: [],
  selectedProduct: {},
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return fetch(`https://upayments-studycase-api.herokuapp.com/api/products`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjYwNzQ0MjA3LCJleHAiOjE2NjExNzYyMDd9.h0JHRKI73HJ7qrofAzJrQ0lR_CxyDofZulY2_gAKMiQ"}`,
      },
    }).then((res) => res.json().then((data) => data.products));
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: any) => {
    return fetch(
      `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjYwNzQ0MjA3LCJleHAiOjE2NjExNzYyMDd9.h0JHRKI73HJ7qrofAzJrQ0lR_CxyDofZulY2_gAKMiQ"}`,
        },
      }
    ).then((res) => res.json());
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchProducts.pending, (state: ProductState) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state: ProductState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        state.products = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, (state: ProductState) => {
      state.loading = false;
      state.products = [];
      state.error = "Failed to load";
    });

    builder.addCase(getProduct.pending, (state: ProductState) => {
      state.loading = true;
    });
    builder.addCase(
      getProduct.fulfilled,
      (state: ProductState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        state.selectedProduct = action.payload;
      }
    );
    builder.addCase(getProduct.rejected, (state: ProductState) => {
      state.loading = false;
      state.selectedProduct = [];
      state.error = "Failed to load";
    });
  },
});

export default productSlice.reducer;
