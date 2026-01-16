import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail, clearMovieDetail } from "../slices/movieDetailSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

export const useMovieDetail = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const dispatch = useAppDispatch();
  const { movie, loading, error } = useAppSelector(
    (state) => state.movieDetail
  );

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieDetail(movieId));
    }

    return () => {
      dispatch(clearMovieDetail());
    };
  }, [dispatch, movieId]);

  return { movie, loading, error };
};
