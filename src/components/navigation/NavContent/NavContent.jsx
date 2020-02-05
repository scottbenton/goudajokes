import React from "react";

export function NavContent(props) {
  const { children } = props;

  return <div className={"p-4 flex flex-col flex-grow"}>{children}</div>;
}
