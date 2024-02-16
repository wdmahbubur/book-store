"use client";
import { Label, TextInput } from "keep-react";

interface InputComponentProps {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
  value?: string;
  type?: string;
}

export const InputComponent = ({
  label,
  placeholder,
  id,
  name,
  required,
  value,
  type,
}: InputComponentProps) => {
  return (
    <div className="my-2">
      <Label value={label} id={id} />
      <TextInput
        id={id}
        placeholder={placeholder}
        color="gray"
        name={name}
        required={required}
        value={value}
        type={type}
      />
    </div>
  );
};
