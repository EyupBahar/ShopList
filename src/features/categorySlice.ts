import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoriesState = {
  categories: [];
  loading: boolean;
  error: string;
};

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: "",
};

export const getCategories = createAsyncThunk(
  "devices/getCategories",
  async () => {
    return fetch(
      "https://upayments-studycase-api.herokuapp.com/api/categories/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjYwNjc5NDM4LCJleHAiOjE2NjExMTE0Mzh9.MYCv0frK5e6DMcr-4bHUfo6EFx74NXlthJkW9hvzwvg"}`,
        },
      }
    ).then((res) => res.json().then((data) => data.categories));
  }
);

export const categoriesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getCategories.pending, (state: CategoriesState) => {
      state.loading = true;
    });
    builder.addCase(
      getCategories.fulfilled,
      (state: CategoriesState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        state.categories = action.payload;
      }
    );
    builder.addCase(
      getCategories.rejected,
      (state: CategoriesState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.categories = [];
        state.error = "Yüklenemedi";
      }
    );
  },
});

export default categoriesSlice.reducer;
