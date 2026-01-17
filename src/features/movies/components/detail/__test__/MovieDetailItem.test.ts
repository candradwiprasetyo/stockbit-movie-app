import { describe, it, expect } from "vitest";
import { movieDetailsList } from "../MovieDetailItem";
import type { MovieDetail } from "../../../types/movieDetail";

describe("movieDetailsList Function", () => {
  const mockMovie: MovieDetail = {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Crime, Drama",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Christian Bale, Heath Ledger",
    Plot: "When the menace known as the Joker wreaks havoc...",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars",
    Poster: "poster.jpg",
    Ratings: [],
    Metascore: "84",
    imdbRating: "9.0",
    imdbVotes: "2,400,000",
    imdbID: "tt0468569",
    Type: "movie",
    DVD: "09 Dec 2008",
    BoxOffice: "$534,858,444",
    Production: "Warner Bros. Pictures",
    Website: "N/A",
  };

  it("It should return an array with exactly 14 detail items", () => {
    const result = movieDetailsList(mockMovie);
    expect(result).toHaveLength(14);
  });

  it("It should map the movie properties to the correct labels", () => {
    const result = movieDetailsList(mockMovie);

    const genreItem = result.find((item) => item.label === "Genre");
    const directorItem = result.find((item) => item.label === "Director");
    const boxOfficeItem = result.find((item) => item.label === "BoxOffice");
    const imdbVotesItem = result.find((item) => item.label === "IMDB Votes");

    expect(genreItem?.value).toBe(mockMovie.Genre);
    expect(directorItem?.value).toBe(mockMovie.Director);
    expect(boxOfficeItem?.value).toBe(mockMovie.BoxOffice);
    expect(imdbVotesItem?.value).toBe(mockMovie.imdbVotes);
  });

  it("It should preserve the order of items as defined in the function", () => {
    const result = movieDetailsList(mockMovie);

    expect(result[0].label).toBe("Genre");
    expect(result[result.length - 1].label).toBe("IMDB Votes");
  });

  it("It should handle empty or N/A values correctly if they exist in the movie object", () => {
    const movieWithEmptyData: MovieDetail = {
      ...mockMovie,
      Website: "N/A",
      BoxOffice: "",
    };

    const result = movieDetailsList(movieWithEmptyData);

    const websiteItem = result.find((item) => item.label === "Website");
    const boxOfficeItem = result.find((item) => item.label === "BoxOffice");

    expect(websiteItem?.value).toBe("N/A");
    expect(boxOfficeItem?.value).toBe("");
  });
});
