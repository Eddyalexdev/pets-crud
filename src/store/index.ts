import { Pet } from "@/models/pets.model";
import { configureStore } from "@reduxjs/toolkit";
import { petsReducer } from "./states";

interface ReducerStates {
  pets: Pet[];
}

const store = configureStore<ReducerStates>({
  reducer: {
    pets: petsReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
