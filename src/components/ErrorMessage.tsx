interface ErrorMessageProps {
  message: string;
  title?: string;
}

export const ErrorMessage = ({
  title = "Something went wrong",
  message,
}: ErrorMessageProps) => {
  return (
    <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-4 text-center">
      <p className="font-semibold text-red-600">{title}</p>
      <p className="mt-1 text-sm text-red-500">{message}</p>
    </div>
  );
};
