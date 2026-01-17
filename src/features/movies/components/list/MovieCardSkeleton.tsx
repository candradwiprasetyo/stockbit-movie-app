export const MovieCardSkeleton = () => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 md:h-72 bg-gray-900" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-700 rounded w-1/4" />
      </div>
    </div>
  );
};
