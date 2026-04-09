import { createAsyncThunk, createSlice, type Draft } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  author: string;
  description: string;
  image: string;
  createdAt: string;
  likes: number;
  comments: number;
}

interface FeedState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  offset: number;
  hasMore: boolean;
}

const initialState: FeedState = {
  posts: [],
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

export const fetchPosts = createAsyncThunk<{ posts: Post[] }, { offset: number; limit: number }, { rejectValue: string }>(
  "feed/fetchPosts",
  async ({ offset, limit }, { rejectWithValue }) => {
    try {
      // Fake delay for loader demonstration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch(`http://localhost:3000/api/v1/posts?offset=${offset}&limit=${limit}`);
      if (!res.ok) throw new Error("Błąd pobierania postów");
      const data = await res.json();
      return { posts: data.posts };
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Błąd pobierania postów");
    }
  },
);

const feedSlice = createSlice({
  name: "feed",
  initialState,
    reducers: {
    resetFeed: (state: Draft<FeedState>) => {
      state.posts = [];
      state.offset = 0;
      state.hasMore = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state: Draft<FeedState>) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state: Draft<FeedState>, action: { payload: { posts: Post[] } }) => {
        state.loading = false;
        state.posts.push(...action.payload.posts);
        state.offset += action.payload.posts.length;
        state.hasMore = action.payload.posts.length > 0;
      })
      .addCase(fetchPosts.rejected, (state: Draft<FeedState>, action: { payload?: string }) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "Błąd pobierania postów";
      })
  },
})

export const { resetFeed } = feedSlice.actions;
export default feedSlice.reducer;