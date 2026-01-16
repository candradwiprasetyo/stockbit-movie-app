import { useEffect, useRef, useCallback } from "react";
import { fetchMovies, setKeyword } from "../slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

export const useMovies = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error, page, hasMore, keyword } = useAppSelector(
    (state) => state.movies
  );

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    dispatch(fetchMovies({ keyword, page: 1 }));
  }, [dispatch, keyword]);

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
    dispatch(fetchMovies({ keyword: normalizedKeyword, page: 1 }));
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
