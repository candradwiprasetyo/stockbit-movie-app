import { TextField } from "@/components/TextField";
import { Search, X } from "lucide-react";
import { SearchSuggestions } from "./SearchSuggestions";
import { useMovieSearch } from "../hooks/useMovieSearch";

interface Props {
  onSearch: (value: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const {
    value,
    setValue,
    suggestions,
    loading,
    wrapperRef,
    handleSelect,
    handleSubmit,
    handleClear,
  } = useMovieSearch({ onSearch });

  return (
    <div ref={wrapperRef} className="relative mb-4">
      <Search
        size={22}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <TextField
        placeholder="Search movies..."
        value={value}
        className="w-full rounded-full border border-gray-500 pt-4 pb-5 px-14 text-2xl font-semibold"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition cursor-pointer"
          aria-label="Clear search"
        >
          <X size={22} />
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
