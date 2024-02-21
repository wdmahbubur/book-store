"use client";
import { Label, Textarea } from "keep-react";

interface TextareaComponentProps {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
  value?: string;
  rows?: number;
}

export const TextareaComponent = ({
  label,
  placeholder,
  id,
  name,
  required,
  value,
  rows,
}: TextareaComponentProps) => {
  return (
    <div className="my-2">
      <Label value={label} id={id} />
      <Textarea
        id={id}
        placeholder={placeholder}
        color="gray"
        name={name}
        required={required}
        value={value}
        rows={rows}
      />
    </div>
  );
};
