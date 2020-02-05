import React from "react";

export function NavBar(props) {
  const { children } = props;

  return (
    <div
      className={
        "flex justify-between items-center p-2 pl-4 w-full bg-white border-secondary border-t-4 shadow-xl text-secondary"
      }
    >
      {children}
    </div>
  );
}
