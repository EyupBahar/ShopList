import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  products: [];
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
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmFhaG1ldGhrbkBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vaGFrYW5rYXJhYWhtZXQiLCJpYXQiOjE2NjA2NTM3NDMsImV4cCI6MTY2MTA4NTc0M30.xV1kFFBWZo8vH7i1tOCU3Xbr1WGytZcEulkYktsb-1s"}`,
      },
    }).then((res) => res.json().then((data) => data.products));
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: any) => {
    return fetch(
      ` https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjYwNjc5NDM4LCJleHAiOjE2NjExMTE0Mzh9.MYCv0frK5e6DMcr-4bHUfo6EFx74NXlthJkW9hvzwvg"}`,
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
