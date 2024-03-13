import { Pet } from "@/models/pets.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const petsSlice = createSlice({
  name: "pets",
  initialState: [],
  reducers: {
    addPet: (state, action: PayloadAction<Pet>) => [...state, action.payload],
    deletePet: (state, action: PayloadAction<string>) =>
      state.filter((pet: Pet) => pet.name !== action.payload),
  },
});

export const { addPet, deletePet } = petsSlice.actions;
export default petsSlice.reducer;
