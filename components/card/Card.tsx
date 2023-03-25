import clsx from "clsx";
import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className: string;
}

const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
