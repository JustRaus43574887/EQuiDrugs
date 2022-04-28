import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "~utils/api";
import { Country, ListParams } from "~utils/api/routes/countries/types";

enum CountriesActions {
  GET_COUNTRIES_LIST = "COUNTRIES/GET_COUNTRIES_LIST",
}

interface CountriesState {
  countriesList: Country[];
  loading: boolean;
}

const initialState: CountriesState = {
  countriesList: [],
  loading: false,
};

export const getCountriesList = createAsyncThunk(
  CountriesActions.GET_COUNTRIES_LIST,
  async (params: ListParams) => {
    const result = await api.countries.list(params);
    return result.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountriesList.pending, (state) => {
      state.countriesList = [];
      state.loading = true;
    });
    builder.addCase(getCountriesList.fulfilled, (state, action) => {
      state.countriesList.push(...action.payload);
      state.loading = false;
    });
  },
});

export default countriesSlice;
