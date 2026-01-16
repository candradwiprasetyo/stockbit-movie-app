interface LoadingProps {
  fullscreen?: boolean;
  message?: string;
}

export const Loading = ({
  fullscreen = false,
  message = "Loading...",
}: LoadingProps) => {
  const containerClass = fullscreen
    ? "fixed inset-0 flex items-center justify-center bg-white/80 z-50"
    : "flex items-center justify-center mt-4 h-[80vh]";

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-3 text-gray-500">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin" />
        {message && <p className="text-sm">{message}</p>}
      </div>
    </div>
  );
};
