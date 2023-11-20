"use client";
import { Label, TextInput } from "keep-react";

interface TextInputComponentProps {
  label: string;
  placeholder: string;
  id: string;
  name: string;
}

export const TextInputComponent = ({
  label,
  placeholder,
  id,
  name,
}: TextInputComponentProps) => {
  return (
    <>
      <Label value={label} id={id} />
      <TextInput id={id} placeholder={placeholder} color="gray" name={name} />
    </>
  );
};
