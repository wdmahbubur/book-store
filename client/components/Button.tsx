interface ButtonProps {
  children: any;
  customClass?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  customClass,
  type,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`group rounded-md flex h-min items-center justify-center text-center font-mediumborder border-transparent focus:ring-4 ${customClass}`}
      type={type ? type : "button"}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="flex items-center text-sm px-3 py-2 transition-all duration-75 ease-in">
        {children}
      </span>
    </button>
  );
};

export default Button;
