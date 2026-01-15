export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}
