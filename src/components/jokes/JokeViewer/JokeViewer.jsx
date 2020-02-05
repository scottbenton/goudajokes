import React from "react";
import "./style.css";

export function JokeViewer(props) {
  const { joke } = props;
  return (
    <div className={"w-full mt-10"}>
      <div
        className={
          "mx-auto relative block max-w-xl backgroundImage text-2xl text-center p-16"
        }
      >
        <span className={"absolute textCenter w-full"}>{joke}</span>
      </div>
    </div>
  );
}
