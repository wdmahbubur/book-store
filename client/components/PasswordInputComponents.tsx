"use client";
import { Label, TextInput } from "keep-react";
import { EyeSlash } from "phosphor-react";

interface PasswordInputComponentProps {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

export const PasswordInputComponent = ({
  label,
  placeholder,
  id,
  name,
  required,
}: PasswordInputComponentProps) => {
  return (
    <div className="my-2">
      <Label value={label} id={id} />
      <TextInput
        id={id}
        placeholder={placeholder}
        color="gray"
        sizing="md"
        type="password"
        icon={<EyeSlash size={20} color="#5E718D" />}
        iconPosition="right"
        name={name}
        required={required}
      />
    </div>
  );
};
