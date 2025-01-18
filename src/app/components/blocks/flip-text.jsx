import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipText() {
  const words = [ "growth", "success", "efficiency", "innovation"];

  return (
    (<div className=" flex justify-center items-center px-4 pt-20">
      <div
        className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 flex flex-col justify-center items-center">
              Plans That Empower Your 
              <br/>
        <FlipWords words={words} />
        
      </div>
    </div>)
  );
}
