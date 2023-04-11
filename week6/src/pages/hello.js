import React from "react";
import World from "./world";

export default function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="자몽허니블랙티" />!
      </h1>

      <img src="cat.jpg" alt="cat" />
    </>
  );
}
