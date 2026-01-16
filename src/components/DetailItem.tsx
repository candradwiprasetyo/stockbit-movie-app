import React from "react";

interface DetailItemProps {
  label: string;
  value?: string | number | null;
  className?: string;
}

export const DetailItem: React.FC<DetailItemProps> = ({
  label,
  value,
  className,
}) => {
  if (!value) return null;
  return (
    <p className={className}>
      <strong>{label}:</strong> {value}
    </p>
  );
};
