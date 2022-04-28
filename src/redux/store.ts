import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./slices/countriesSlice";
import medicamentsSlice from "./slices/medicamentsSlice";

const store = configureStore({
  reducer: {
    medicaments: medicamentsSlice.reducer,
    countries: countriesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
