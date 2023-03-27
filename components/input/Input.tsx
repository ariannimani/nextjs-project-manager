import clsx from "clsx";
import { ChangeEvent, FC } from "react";

interface InputProps {
  className: string;
  required: boolean;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  className,
  type = "text",
  required = false,
  placeholder = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <input
      required={required}
      placeholder={placeholder}
      value={value}
      type={type}
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      onChange={onChange}
    />
  );
};

export default Input;
