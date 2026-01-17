import { TextField } from "../../../../components/TextField";
import { Search } from "lucide-react";
import { SearchSuggestions } from "./SearchSuggestions";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import { CloseButton } from "../../../..//components/CloseButton";

interface Props {
  onSearch: (value: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const {
    value,
    setValue,
    suggestions,
    wrapperRef,
    handleSelect,
    handleSubmit,
    handleClear,
  } = useMovieSearch({ onSearch });

  return (
    <div className="sticky top-0 left-0 w-full max-w-8xl mx-auto z-50">
      <div ref={wrapperRef} className="relative mb-4">
        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 z-30"
        />

        <TextField
          placeholder="Search movies..."
          value={value}
          className="w-full rounded-b-[26px] rounded-t-none border-none pt-4 pb-5 px-14 text-2xl font-semibold bg-gray-900 z-20"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />

        {value && (
          <CloseButton
            onClick={handleClear}
            className="top-1/2 -translate-y-1/2 right-6"
          />
        )}

        <SearchSuggestions items={suggestions} onSelect={handleSelect} />
      </div>
    </div>
  );
};
