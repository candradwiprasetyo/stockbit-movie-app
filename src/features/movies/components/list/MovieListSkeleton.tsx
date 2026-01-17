import { MovieCardSkeleton } from "./MovieCardSkeleton";

interface MovieListSkeletonProps {
  count?: number;
}

export const MovieListSkeleton = ({ count = 10 }: MovieListSkeletonProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
};
