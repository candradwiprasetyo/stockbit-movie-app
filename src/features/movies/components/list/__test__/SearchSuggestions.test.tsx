import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SearchSuggestions } from "../SearchSuggestions";
import type { Movie } from "../../../types/movie";

const mockMovies: Movie[] = [
  {
    imdbID: "1",
    Title: "Batman Begins",
    Year: "2005",
    Poster: "N/A",
    Type: "movie",
  },
  {
    imdbID: "2",
    Title: "The Dark Knight",
    Year: "2008",
    Poster: "N/A",
    Type: "movie",
  },
  {
    imdbID: "3",
    Title: "The Dark Knight Rises",
    Year: "2012",
    Poster: "N/A",
    Type: "movie",
  },
  {
    imdbID: "4",
    Title: "Batman v Superman",
    Year: "2016",
    Poster: "N/A",
    Type: "movie",
  },
  {
    imdbID: "5",
    Title: "The Batman",
    Year: "2022",
    Poster: "N/A",
    Type: "movie",
  },
  {
    imdbID: "6",
    Title: "Batman & Robin",
    Year: "1997",
    Poster: "N/A",
    Type: "movie",
  },
];

describe("SearchSuggestions Component", () => {
  it("It should return null (render nothing) when items array is empty", () => {
    const { container } = render(
      <SearchSuggestions items={[]} onSelect={vi.fn()} />
    );

    expect(container.firstChild).toBeNull();
  });

  it("It should render exactly 5 items even if the input has more", () => {
    render(<SearchSuggestions items={mockMovies} onSelect={vi.fn()} />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(5);
    expect(screen.queryByText(/Batman & Robin/i)).toBeNull();
  });

  it("It should display the movie title and year correctly", () => {
    render(<SearchSuggestions items={[mockMovies[0]]} onSelect={vi.fn()} />);

    expect(screen.getByText("Batman Begins (2005)")).toBeDefined();
  });

  it("It should call onSelect with the correct title when an item is clicked", () => {
    const onSelectMock = vi.fn();
    render(<SearchSuggestions items={mockMovies} onSelect={onSelectMock} />);

    const firstItem = screen.getByText(/Batman Begins/i);
    fireEvent.click(firstItem);

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith("Batman Begins");
  });
});
