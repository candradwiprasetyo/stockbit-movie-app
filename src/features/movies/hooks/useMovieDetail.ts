import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail, clearMovieDetail } from "../slices/movieDetailSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

export const useMovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { movie, loading, error } = useAppSelector(
    (state) => state.movieDetail
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetail(id));
    }

    return () => {
      dispatch(clearMovieDetail());
    };
  }, [dispatch, id]);

  return { movie, loading, error };
};
