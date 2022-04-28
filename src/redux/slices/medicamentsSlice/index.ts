import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "~utils/api";
import {
  MedicamentName,
  SearchParams,
} from "~utils/api/routes/medicaments/types";

enum MedicamentsActions {
  SEARCH_MEDICAMENTS = "MEDICAMENTS/SEARCH_MEDICAMENTS",
}

interface MedicamentsState {
  medicaments: MedicamentName[];
  loading: boolean;
}

const initialState: MedicamentsState = {
  medicaments: [],
  loading: false,
};

export const searchMedicaments = createAsyncThunk(
  MedicamentsActions.SEARCH_MEDICAMENTS,
  async (searchParams: SearchParams) => {
    const response = await api.medicaments.search(searchParams);
    return response.data;
  }
);

const medicamentsSlice = createSlice({
  name: "medicaments",
  initialState,
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.medicaments = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMedicaments.pending, (state) => {
      state.loading = true;
      state.medicaments = [];
    });
    builder.addCase(searchMedicaments.fulfilled, (state, action) => {
      state.medicaments.push(...action.payload);
      state.loading = false;
    });
  },
});

export const { clearState } = medicamentsSlice.actions;

export default medicamentsSlice;
