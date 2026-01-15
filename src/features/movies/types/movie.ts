export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  keyword: string;
}
