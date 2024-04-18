import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ImageResponse {
    urls: Urls;
  }
  interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  }


  export const fetchWeatherData = createAsyncThunk(
    "weather/fetchWeatherData",
    async (city: string) => { // Вставьте свой API-ключ для WeatherAPI
      const response = await axios.get<ImageResponse>(
        `https://api.unsplash.com/photos/random?query=${city}&orientation=landscape&client_id=${process.env.REACT_APP_IMAGE_API_KEY}`
      );
      return response.data;
    }
  );

  interface ImageState {
    status: "idle" | "loading" | "failed" | "success";
    data?: ImageResponse;
    error?: unknown;
  }
  
  const initialState: ImageState = {
    status: "idle",
  };

  const imageSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<ImageResponse>) => {
        state.status = "idle";
        state.data = action.payload;
      },
    },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchWeatherData.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(fetchWeatherData.fulfilled, (state, action) => {
  //         state.status = "success";
  //         state.data = action.payload;
  //       })
  //       .addCase(fetchWeatherData.rejected, (state, action) => {
  //         state.status = "failed";
  //         state.error = action.error.message || null;
  //       });
  //   },
  });
  
  export const { setImage } = imageSlice.actions;
  
  export default imageSlice.reducer;