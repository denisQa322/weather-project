import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ImageResponse {
  id: string
  slug: string
  alternative_slugs: AlternativeSlugs
  created_at: string
  updated_at: string
  promoted_at: any
  width: number
  height: number
  color: string
  blur_hash: string
  description: any
  alt_description: string
  breadcrumbs: Breadcrumb[]
  urls: Urls
  links: Links
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  asset_type: string
  user: User
  exif: Exif
  location: Location
  meta: Meta
  public_domain: boolean
  tags: Tag[]
  tags_preview: TagsPreview[]
  views: number
  downloads: number
  topics: any[]
}

export interface AlternativeSlugs {
  en: string
  es: string
  ja: string
  fr: string
  it: string
  ko: string
  de: string
  pt: string
}

export interface Breadcrumb {
  slug: string
  title: string
  index: number
  type: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions {}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: any
  twitter_username: string
  portfolio_url: any
  bio: string
  location: string
  links: Links2
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

export interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}

export interface Social {
  instagram_username: string
  portfolio_url: any
  twitter_username: string
  paypal_email: any
}

export interface Exif {
  make: string
  model: string
  name: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

export interface Location {
  name: string
  city: any
  country: string
  position: Position
}

export interface Position {
  latitude: number
  longitude: number
}

export interface Meta {
  index: boolean
}

export interface Tag {
  type: string
  title: string
  source?: Source
}

export interface Source {
  ancestry: Ancestry
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: CoverPhoto
}

export interface Ancestry {
  type: Type
  category: Category
  subcategory?: Subcategory
}

export interface Type {
  slug: string
  pretty_slug: string
}

export interface Category {
  slug: string
  pretty_slug: string
}

export interface Subcategory {
  slug: string
  pretty_slug: string
}

export interface CoverPhoto {
  id: string
  slug: string
  alternative_slugs: AlternativeSlugs2
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description?: string
  alt_description: string
  breadcrumbs: any[]
  urls: Urls2
  links: Links3
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions2
  asset_type: string
  premium: boolean
  plus: boolean
  user: User2
}

export interface AlternativeSlugs2 {
  en: string
  es: string
  ja: string
  fr: string
  it: string
  ko: string
  de: string
  pt: string
}

export interface Urls2 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links3 {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions2 {
  people?: People
  "current-events"?: CurrentEvents
}

export interface People {
  status: string
  approved_on: string
}

export interface CurrentEvents {
  status: string
  approved_on: string
}

export interface User2 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: string
  portfolio_url: any
  bio?: string
  location?: string
  links: Links4
  profile_image: ProfileImage2
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social2
}

export interface Links4 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage2 {
  small: string
  medium: string
  large: string
}

export interface Social2 {
  instagram_username: string
  portfolio_url: any
  twitter_username?: string
  paypal_email: any
}

export interface TagsPreview {
  type: string
  title: string
}

  interface ImageState{
    status: "idle" | "loading" | "failed" | "success";
    data?: ImageResponse;
    error?: unknown;
  }
  const initialState: ImageState = {
    status: "idle",
   };

  //create try catch and loader for image
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