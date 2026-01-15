import { useEffect, useState, useRef } from "react";

interface Props {
  onSearch: (value: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const [value, setValue] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const handler = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => clearTimeout(handler);
  }, [value, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full mb-4 p-2 border rounded"
    />
  );
};
