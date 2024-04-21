import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import weatherSlice from "./WeatherSlice";
import ImageSlice from "./ImageSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    image: ImageSlice
  },
});
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;