import { useRef } from "react";

interface FileUploadComponentProps {
  labelText: string;
  maximumSize: number;
  filename: string;
  accept: string;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FileUploadComponent = ({
  labelText,
  maximumSize,
  filename,
  accept,
  onFileChange,
}: FileUploadComponentProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-metal-25 p-5 transition-all hover:bg-metal-50">
      <label
        htmlFor="upload"
        className="relative w-full cursor-pointer items-center justify-between space-y-5 rounded-lg border-2 border-dashed border-metal-300 p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-metal-100 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#5E718D"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
                  fill="none"
                  stroke="#5E718D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></path>
                <polyline
                  points="152 32 152 88 208 88"
                  fill="none"
                  stroke="#5E718D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></polyline>
                <polyline
                  points="100 148 128 120 156 148"
                  fill="none"
                  stroke="#5E718D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></polyline>
                <line
                  x1="128"
                  y1="184"
                  x2="128"
                  y2="120"
                  fill="none"
                  stroke="#5E718D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></line>
              </svg>
            </div>
            <div>
              <p className="text-body-4 2xl:text-body-2 font-semibold text-metal-500">
                {labelText}
              </p>
              <p className="text-body-5 text-metal-400">
                FileName: {filename || accept}
              </p>
            </div>
          </div>
          <div className="relative hidden md:flex cursor-pointer items-center md:gap-5 ">
            <p className="text-body-5 xl:block hidden text-metal-400">
              Maximum: {maximumSize} MB
            </p>
            <button
              className="group rounded-md flex h-min w-fit items-center justify-center text-center font-medium active:focus:scale-95 duration-150 text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-4 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100 !relative !z-40 !cursor-pointer"
              type="button"
              onClick={handleClick}
            >
              <span className="text-body-4 px-5 py-3 flex items-center justify-center cursor-pointer transition-all duration-75 ease-in">
                Choose File
              </span>
            </button>
            <input
              id="upload"
              type="file"
              accept={accept}
              onChange={onFileChange}
              ref={inputRef}
              className="absolute top-0 w-full left-0 scale-100 opacity-0"
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default FileUploadComponent;