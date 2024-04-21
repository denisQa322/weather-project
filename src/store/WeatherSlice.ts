import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface WeatherResponse {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface WeatherState {
  status: "idle" | "loading" | "failed" | "success";
  data?: WeatherResponse;
  error?: unknown;
}

const initialState: WeatherState = {
  status: "idle",
};

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (city: string) => {
    const response = await axios.get<WeatherResponse>(
      `http://api.weatherapi.com/v1/current.json?key=37fdc78617bd479db3d94410242104&q=${city}&aqi=no`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherResponse>) => {
      state.status = "idle";
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;