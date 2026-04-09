import Spinner from "@/components/ui/spinner/Spinner";
import { fetchPosts, resetFeed } from "@/slices/feedSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { useCallback, useEffect, useRef } from "react";

export default function FeedPage() {
  const dispatch = useAppDispatch();
  const { posts, loading, error, offset, hasMore } = useAppSelector(
    (state) => state.feed,
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(fetchPosts({ offset, limit: 1 }));
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, offset, dispatch],
  );
  useEffect(() => {
    dispatch(resetFeed());
    dispatch(fetchPosts({ offset: 0, limit: 1 }));
  }, [dispatch]);
  return (
    <div className="max-w-xl mx-auto py-8 px-2">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Instagram Feed (Demo)
      </h1>
      <div className="flex flex-col gap-6">
        {posts.map((post, idx) => {
          const isLast = idx === posts.length - 1;
          return (
            <div
              key={post.id}
              ref={isLast ? lastPostRef : undefined}
              className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg">
                  {post.author[0]}
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
              <img
                src={post.image}
                alt="post"
                className="rounded-md w-full aspect-square object-cover"
              />
              <div className="text-gray-800 mt-2">{post.description}</div>
              <div className="flex gap-4 text-sm text-gray-500 mt-1">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          );
        })}
        {loading && (
          <div className="py-6">
            <Spinner />
          </div>
        )}
        {error && <div className="text-center text-red-500">{error}</div>}
        {!hasMore && (
          <div className="text-center text-gray-400">Brak więcej postów.</div>
        )}
      </div>
    </div>
  );
}