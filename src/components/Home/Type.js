import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Engineer",
          
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0.5,
      }}
    />
  );
}

export default Type;
