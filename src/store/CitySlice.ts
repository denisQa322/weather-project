import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CityName{
    city: string;
}

const initialState: CityName = {
    city: "Almaty"
};

const citySlice = createSlice({ 
    name: "city",
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        }
    }
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;