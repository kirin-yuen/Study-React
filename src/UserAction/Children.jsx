import React from "react";
import { log, getNumber } from "../utils";

export default function Children({ setChildFood }) {
  return (
    <div>
      <button
        onClick={() => {
          log(getNumber(17));
          setChildFood("children");
        }}
      >
        Set Children Food
      </button>
    </div>
  );
}
