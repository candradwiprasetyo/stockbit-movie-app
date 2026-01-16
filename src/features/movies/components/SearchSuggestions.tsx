import type { Movie } from "../types/movie";

interface Props {
  items: Movie[];
  onSelect: (value: string) => void;
  loading: boolean;
}

export const SearchSuggestions = ({ items, onSelect, loading }: Props) => {
  if (loading) {
    return (
      <div className="absolute z-10 w-full bg-white border rounded shadow p-2">
        <p className="text-sm text-gray-500">Searching...</p>
      </div>
    );
  }

  if (!items.length) return null;

  return (
    <ul className="absolute z-10 w-full bg-white border rounded shadow">
      {items.slice(0, 5).map((movie) => (
        <li
          key={movie.imdbID}
          onClick={() => onSelect(movie.Title)}
          className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
        >
          {movie.Title} ({movie.Year})
        </li>
      ))}
    </ul>
  );
};
