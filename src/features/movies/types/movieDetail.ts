export interface Rating {
  Source: string;
  Value: string;
}

export interface MovieDetail {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export interface MovieDetailResponse extends MovieDetail {
  Response: "True" | "False";
  Error?: string;
}

export type LabelVariant =
  | "gray"
  | "green"
  | "blue"
  | "yellow"
  | "red"
  | "purple"
  | "orange";
