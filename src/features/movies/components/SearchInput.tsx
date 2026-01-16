import { useEffect, useRef, useState } from "react";
import { fetchMoviesApi } from "../api/moviesApi";
import type { Movie } from "../types/movie";
import { SearchSuggestions } from "./SearchSuggestions";
import { TextField } from "@/components/TextField";

interface Props {
  onSearch: (value: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const [value, setValue] = useState("");
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
    if (!value.trim()) {
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
    }, 400);

    return () => clearTimeout(timeoutRef.current);
  }, [value]);

  const handleSelect = (title: string) => {
    setValue(title);
    setSuggestions([]);
    onSearch(title);
  };

  const handleClear = () => {
    setValue("");
    setSuggestions([]);
    onSearch("movie");
  };

  return (
    <div ref={wrapperRef} className="relative mb-4">
      <TextField
        placeholder="Search movies..."
        value={value}
        className="w-full rounded-full border border-gray-500 py-4 px-6 text-2xl font-semibold"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(value);
            setSuggestions([]);
          }
        }}
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition cursor-pointer text-2xl"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}

      <SearchSuggestions
        items={suggestions}
        loading={loading}
        onSelect={handleSelect}
      />
    </div>
  );
};
