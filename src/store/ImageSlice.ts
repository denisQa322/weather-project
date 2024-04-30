import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchWeatherData } from "./WeatherSlice";

export interface ImageResponse {
  payload: Payload;
}
export interface Payload {
  urls: Urls;
}
export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

  interface ImageState{
    status: "idle" | "loading" | "failed" | "success";
    data?: ImageResponse;
    error?: unknown;
  }
  const initialState: ImageState = {
    status: "idle",
   };

  export const fetchImage = createAsyncThunk(
    "image/fetchImage",
    async (city: string) => {
      const response = await axios.get<ImageResponse>(
        `https://api.unsplash.com/photos/random?query=${city}&orientation=landscape&client_id=${process.env.REACT_APP_IMAGE_API_KEY}`
      );
      return response.data;
    }
  );

  
  const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<ImageResponse>) => {
        state.data = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchImage.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchImage.fulfilled, (state, action) => {
          state.status = "success";
          state.data = action.payload;
        })
        .addCase(fetchImage.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || null;
        });
    },
  });
  
  export const { setImage } = imageSlice.actions;
  
  export default imageSlice.reducer;