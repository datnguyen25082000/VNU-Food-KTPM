import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiPosts } from "../../services/apis";

export const doGetPosts = createAsyncThunk(
  "post@get/listPosts",
  async (params) => {
    const result = await apiPosts.getPosts(params);
    return result.data;
  }
);

export const doGetMorePosts = createAsyncThunk(
  "post@get/morePosts",
  async (params) => {
    const result = await apiPosts.getPosts(params);

    return result.data;
  }
);

export const doGetPost = createAsyncThunk("post@get/post", async (param) => {
  const result = await apiPosts.getPost(param);
  return result.data;
});
export const doGetComments = createAsyncThunk(
  "post@get/comments",
  async (param) => {
    const result = await apiPosts.getComments(param);
    return result.data;
  }
);
export const doGetImages = createAsyncThunk(
  "post@get/images",
  async (param) => {
    const result = await apiPosts.getImages(param);
    return result.data;
  }
);

const initialState = {
  listPosts: {},
  startIndex: 0,
  post: {},
  comments: [],
  images: [],
  isLoading: false,
  error: {},
};

const slice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //do get listPost
    builder.addCase(doGetPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetPosts.fulfilled, (state, action) => {
      state.listPosts = action.payload.posts;
      state.isLoading = false;
    });
    builder.addCase(doGetPosts.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
    });

    //do get more posts
    builder.addCase(doGetMorePosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetMorePosts.fulfilled, (state, action) => {
      state.listPosts = [...state.listPosts, ...action.payload.posts];
      state.isLoading = false;
    });
    builder.addCase(doGetMorePosts.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
    });

    // do get post
    builder.addCase(doGetPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetPost.fulfilled, (state, action) => {
      console.log("post", action.payload);
      state.post = action.payload.post;
      state.isLoading = false;
    });
    builder.addCase(doGetPost.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
    });

    // do get comments
    builder.addCase(doGetComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetComments.fulfilled, (state, action) => {
      console.log("comments", action.payload);

      state.comments = action.payload.rows;
      state.isLoading = false;
    });
    builder.addCase(doGetComments.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
    });

    //do get images
    builder.addCase(doGetImages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetImages.fulfilled, (state, action) => {
      state.images = action.payload.arrayList;
      console.log("action.payload", action.payload);
      state.isLoading = false;
    });
    builder.addCase(doGetImages.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
    });
  },
});
const { reducer: postsReducer } = slice;

export default postsReducer;
