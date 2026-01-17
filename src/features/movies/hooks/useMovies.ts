import { useEffect, useRef, useCallback } from "react";
import { fetchMovies, setKeyword } from "../slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

export const useMovies = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error, page, hasMore, keyword } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (loading || movies.length > 0 || error) return;

    dispatch(fetchMovies({ keyword, page: 1 }));
  }, [dispatch, keyword, movies.length, loading, error]);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && movies.length > 5) {
          dispatch(fetchMovies({ keyword, page }));
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, dispatch, page, keyword, movies.length]
  );

  const search = (value: string) => {
    const normalizedKeyword = value.trim() || "movie";
    dispatch(setKeyword(normalizedKeyword));
  };

  return {
    movies,
    loading,
    error,
    lastMovieRef,
    search,
    keyword,
  };
};
