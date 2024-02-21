"use client";
import { Label } from "keep-react";
import { EyeSlash, Eye } from "phosphor-react";
import { useState } from "react";

interface PasswordInputComponentProps {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
  value?: string;
}

export const PasswordInputComponent = ({
  label,
  placeholder,
  id,
  name,
  required,
  value,
}: PasswordInputComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="my-2">
      <Label value={label} id={id} />
      <div className="flex">
        <div className="relative w-full">
          <input
            className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border pr-10 rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300"
            id={id}
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            name={name}
            defaultValue={value}
          />
          <div
            className="absolute inset-y-0 flex items-center right-0 pr-3 cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? (
              <EyeSlash size={20} color="#5E718D" />
            ) : (
              <Eye size={20} color="#5E718D" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
