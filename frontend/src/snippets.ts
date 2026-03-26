// import { createSlice, createAsyncThunk, type Draft } from "@reduxjs/toolkit";

// export interface Post {
//   id: number;
//   author: string;
//   description: string;
//   image: string;
//   createdAt: string;
//   likes: number;
//   comments: number;
// }

// interface FeedState {
//   posts: Post[];
//   loading: boolean;
//   error: string | null;
//   offset: number;
//   hasMore: boolean;
// }

// export const fetchPosts = createAsyncThunk<{ posts: Post[] }, { offset: number; limit: number }, { rejectValue: string }>(
//   "feed/fetchPosts",
//   async ({ offset, limit }, { rejectWithValue }) => {
//     try {
//       // Fake delay for loader demonstration
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       const res = await fetch(`http://localhost:3000/api/v1/posts?offset=${offset}&limit=${limit}`);
//       if (!res.ok) throw new Error("Błąd pobierania postów");
//       const data = await res.json();
//       return { posts: data.posts };
//     } catch (err) {
//       if (err instanceof Error) {
//         return rejectWithValue(err.message);
//       }
//       return rejectWithValue("Błąd pobierania postów");
//     }
//   },
// );

// const initialState: FeedState = {
//   posts: [],
//   loading: false,
//   error: null,
//   offset: 0,
//   hasMore: true,
// };

// const feedSlice = createSlice({
//   name: "feed",
//   initialState,
//   reducers: {
//     resetFeed: (state: Draft<FeedState>) => {
//       state.posts = [];
//       state.offset = 0;
//       state.hasMore = true;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state: Draft<FeedState>) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchPosts.fulfilled, (state: Draft<FeedState>, action: { payload: { posts: Post[] } }) => {
//         state.loading = false;
//         state.posts.push(...action.payload.posts);
//         state.offset += action.payload.posts.length;
//         state.hasMore = action.payload.posts.length > 0;
//       })
//       .addCase(fetchPosts.rejected, (state: Draft<FeedState>, action: { payload?: string }) => {
//         state.loading = false;
//         state.error = typeof action.payload === "string" ? action.payload : "Błąd pobierania postów";
//       });
//   },
// });

// export const { resetFeed } = feedSlice.actions;
// export default feedSlice.reducer;

//// FEED PAGE

// export default function FeedPage() {
//   const dispatch = useAppDispatch();
//   const { posts, loading, error, offset, hasMore } = useAppSelector(
//     (state) => state.feed,
//   );
//   const observer = useRef<IntersectionObserver | null>(null);
//   const lastPostRef = useCallback(
//     (node: HTMLDivElement | null) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new window.IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           dispatch(fetchPosts({ offset, limit: 5 }));
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [loading, hasMore, offset, dispatch],
//   );
//   useEffect(() => {
//     dispatch(resetFeed());
//     dispatch(fetchPosts({ offset: 0, limit: 5 }));
//   }, [dispatch]);
//   return (
//     <div className="max-w-xl mx-auto py-8 px-2">
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         Instagram Feed (Demo)
//       </h1>
//       <div className="flex flex-col gap-6">
//         {posts.map((post, idx) => {
//           const isLast = idx === posts.length - 1;
//           return (
//             <div
//               key={post.id}
//               ref={isLast ? lastPostRef : undefined}
//               className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg">
//                   {post.author[0]}
//                 </div>
//                 <div>
//                   <div className="font-semibold">{post.author}</div>
//                   <div className="text-xs text-gray-500">
//                     {new Date(post.createdAt).toLocaleString()}
//                   </div>
//                 </div>
//               </div>
//               <img
//                 src={post.image}
//                 alt="post"
//                 className="rounded-md w-full aspect-square object-cover"
//               />
//               <div className="text-gray-800 mt-2">{post.description}</div>
//               <div className="flex gap-4 text-sm text-gray-500 mt-1">
//                 <span>❤️ {post.likes}</span>
//                 <span>💬 {post.comments}</span>
//               </div>
//             </div>
//           );
//         })}
//         {loading && (
//           <div className="py-6">
//             <Spinner />
//           </div>
//         )}
//         {error && <div className="text-center text-red-500">{error}</div>}
//         {!hasMore && (
//           <div className="text-center text-gray-400">Brak więcej postów.</div>
//         )}
//       </div>
//     </div>
//   );
// }
