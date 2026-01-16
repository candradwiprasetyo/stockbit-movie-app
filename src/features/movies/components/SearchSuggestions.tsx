import type { Movie } from "../types/movie";

interface Props {
  items: Movie[];
  onSelect: (value: string) => void;
}

export const SearchSuggestions = ({ items, onSelect }: Props) => {
  if (!items.length) return null;

  return (
    <ul className="absolute z-10 w-full bg-gray-900 rounded-b-[32px] shadow py-8 top-10">
      {items.slice(0, 5).map((movie) => (
        <li
          key={movie.imdbID}
          onClick={() => onSelect(movie.Title)}
          className="px-6 py-2 cursor-pointer hover:bg-gray-700 text-sm"
        >
          {movie.Title} ({movie.Year})
        </li>
      ))}
    </ul>
  );
};
