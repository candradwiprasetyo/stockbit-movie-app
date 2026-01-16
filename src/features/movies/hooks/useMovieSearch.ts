import { useEffect, useRef, useState } from "react";
import { fetchMoviesApi } from "../api/moviesApi";
import type { Movie } from "../types/movie";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

interface UseMovieSearchProps {
  onSearch: (value: string) => void;
  debounceMs?: number;
}

export const useMovieSearch = ({
  onSearch,
  debounceMs = 400,
}: UseMovieSearchProps) => {
  const lastKeyword = useSelector((state: RootState) => state.movies.keyword);
  const [value, setValue] = useState(
    lastKeyword === "movie" ? "" : lastKeyword
  );
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const timeoutRef = useRef<number | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!value.trim() || value === lastKeyword) {
      setSuggestions([]);
      return;
    }

    clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesApi(value, 1);
        setSuggestions(res.movies);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, debounceMs);

    return () => clearTimeout(timeoutRef.current);
  }, [value, debounceMs, lastKeyword]);

  const handleSelect = (title: string) => {
    setValue(title);
    setSuggestions([]);
    onSearch(title);
  };

  const handleSubmit = () => {
    const keyword = value.trim() || "movie";
    onSearch(keyword);
    setSuggestions([]);
  };

  const handleClear = () => {
    setValue("");
    setSuggestions([]);
    onSearch("movie");
  };

  return {
    value,
    setValue,
    suggestions,
    loading,
    wrapperRef,
    handleSelect,
    handleSubmit,
    handleClear,
  };
};
