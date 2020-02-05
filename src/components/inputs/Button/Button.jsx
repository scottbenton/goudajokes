import React from "react";
import { combineClasses } from "utilities/style-helpers";

Button.defaultProps = {
  className: "",
  color: "default"
};

const colors = {
  default: "bg-gray-400 shadow-md focus:shadow hover:bg-gray-500",
  primary:
    "bg-primary shadow-md focus:shadow hover:bg-primary-dark text-primary-contrastText",
  secondary:
    "bg-secondary shadow-md focus:shadow hover:bg-secondary-dark text-secondary-contrastText"
};

export function Button(props) {
  const { children, className, color, ...otherProps } = props;
  return (
    <button
      className={combineClasses(["btn ripple m-2", colors[color], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
