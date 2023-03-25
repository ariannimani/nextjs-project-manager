import clsx from "clsx";
import React from "react";

type tGlassPane = {
  children: React.ReactNode;
  className: string;
};
const GlassPane: React.FC<tGlassPane> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
