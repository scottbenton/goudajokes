import React from "react";
import { NavBar } from "components/navigation/NavBar";
import { NavContent } from "components/navigation/NavContent";
import GoudaLogo from "resources/GoudaLogo.png";
import { JokeViewer } from "./jokes/JokeViewer";
import { Button } from "./inputs/Button";

export function GoudaJokes() {
  const [joke, setJoke] = React.useState(
    "I'm here for a gouda time, not a long time."
  );

  return (
    <>
      <NavBar>
        <div className={"flex items-center"}>
          <img src={GoudaLogo} alt={""} className={"h-16"} />
          <h1 className={"ml-2"}>Gouda Jokes</h1>
        </div>
      </NavBar>
      <NavContent>
        <JokeViewer joke={joke} />
        <div className={"flex justify-center mt-4"}>
          <Button color={"primary"}>Add a Joke</Button>
          <Button
            onClick={() =>
              setJoke("What cheese surrounds a medieval castle? Moatzarella!")
            }
            color={"secondary"}
          >
            Next Joke
          </Button>
        </div>
      </NavContent>
    </>
  );
}
