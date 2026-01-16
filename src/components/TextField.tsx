import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TextField = ({ label, error, ...props }: Props) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}

      <input
        {...props}
        className={`p-2 border rounded ${error ? "border-red-500" : ""} ${
          props.className ?? ""
        }`}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
