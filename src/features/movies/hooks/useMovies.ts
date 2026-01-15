import { useEffect, useRef, useCallback } from "react";
import { fetchMovies } from "../slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const DEFAULT_KEYWORD = "movie";

export const useMovies = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error, page, hasMore } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies({ keyword: DEFAULT_KEYWORD, page: 1 }));
  }, [dispatch]);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && movies.length > 5) {
          dispatch(fetchMovies({ keyword: DEFAULT_KEYWORD, page }));
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, dispatch, page, movies.length]
  );

  return {
    movies,
    loading,
    error,
    lastMovieRef,
  };
};
