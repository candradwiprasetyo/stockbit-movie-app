import { useEffect, useRef } from "react";
import { fetchMovies } from "../slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

export const useMovies = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.movies);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;

    hasFetched.current = true;
    dispatch(fetchMovies());
  }, [dispatch]);

  return state;
};
