interface Props {
  message?: string;
  keyword?: string;
}

export const NotFound = ({ message = "No results found", keyword }: Props) => {
  return (
    <div className="text-center text-gray-500 mt-8 flex h-[75vh] items-center justify-center">
      <p>
        {message}
        {keyword && (
          <>
            {" "}
            for "<strong>{keyword}</strong>"
          </>
        )}
      </p>
    </div>
  );
};
