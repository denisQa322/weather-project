import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ImageResponse {
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
    image: string;
    data?: ImageResponse;
  }
  const initialState: ImageState = { 
    image: "",
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
  });
  
  export const { setImage } = imageSlice.actions;
  
  export default imageSlice.reducer;