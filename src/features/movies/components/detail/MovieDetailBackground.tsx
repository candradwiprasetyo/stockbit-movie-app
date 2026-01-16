interface MovieDetailBackgroundProps {
  poster?: string | null;
  children: React.ReactNode;
}

export const MovieDetailBackground = ({
  poster,
  children,
}: MovieDetailBackgroundProps) => {
  const backgroundImage = poster && poster !== "" ? poster : undefined;

  return (
    <div
      className="relative min-h-screen bg-gray-900 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-90"></div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
