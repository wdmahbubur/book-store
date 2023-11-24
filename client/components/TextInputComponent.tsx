"use client";
import { Label, TextInput } from "keep-react";

interface TextInputComponentProps {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

export const TextInputComponent = ({
  label,
  placeholder,
  id,
  name,
  required,
}: TextInputComponentProps) => {
  return (
    <div className="my-2">
      <Label value={label} id={id} />
      <TextInput
        id={id}
        placeholder={placeholder}
        color="gray"
        name={name}
        required={required}
      />
    </div>
  );
};
