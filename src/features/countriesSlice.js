import { createSlice } from "@reduxjs/toolkit";
import { countryData } from "../data";

const initialState = {
  countries: countryData,
};

export const countriesSlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    addCountry: (state, action) => {
      state.countries.push(action.payload);
    },

    deleteCountry: (state, action) => {
      const idToDelete = action.payload;
      state.countries = state.countries.filter(
        (country) => country.id !== idToDelete
      );
    },

    editCountry: (state, action) => {
      const updatedCountry = action.payload;
      const index = state.countries.findIndex(
        (country) => country.id === updatedCountry.id
      );
      if (index !== -1) {
        state.countries[index] = updatedCountry;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCountry, deleteCountry, editCountry } =
  countriesSlice.actions;

export default countriesSlice.reducer;
