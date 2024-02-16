"use client";
import { Label, TextInput } from "keep-react";

interface SelectComponentProps {
  children: React.ReactNode;
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectComponent = ({
  label,
  placeholder,
  id,
  name,
  required,
  value,
  children,
  onChange,
}: SelectComponentProps) => {
  return (
    <div className="my-2">
      <Label value={label} id={id} />
      <div className="flex">
        <div className="relative w-full">
          <select
            className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300"
            id={id}
            placeholder={placeholder}
            name={name}
            required={required}
            defaultValue={value}
            onChange={onChange}
          >
            {children}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
