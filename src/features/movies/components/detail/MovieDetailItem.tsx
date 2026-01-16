import type { MovieDetail } from "../../types/movieDetail";

export const movieDetailsList = (movie: MovieDetail) => [
  { label: "Genre", value: movie.Genre },
  { label: "Director", value: movie.Director },
  { label: "Writer", value: movie.Writer },
  { label: "Actors", value: movie.Actors },
  { label: "Language", value: movie.Language },
  { label: "Country", value: movie.Country },
  { label: "Awards", value: movie.Awards },
  { label: "DVD", value: movie.DVD },
  { label: "BoxOffice", value: movie.BoxOffice },
  { label: "Production", value: movie.Production },
  { label: "Website", value: movie.Website },
  { label: "Type", value: movie.Type },
  { label: "Metascore", value: movie.Metascore },
  { label: "IMDB Votes", value: movie.imdbVotes },
];
