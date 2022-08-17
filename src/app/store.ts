import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import categoryReducer from "../features/categorySlice";
import addItemReducer from "../features/addItemSlice";
import deleteItemReducer from "../features/deleteItemSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    addItem: addItemReducer,
    deleteItem: deleteItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
