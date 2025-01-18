"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import ButtonBorder from "../ui/buttonBorder";
export function TypeWriter() {
  const words = [
    {
          text: "Clarity",
        className:"text-white"
    },
    {
        text: "In",
        className:"text-white"
    },
    {
        text: "Complexity",
        className:"text-white"
    },
    
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-10 pt-20 gap-4">
      
          <TypewriterEffectSmooth className="opacity-50 " words={words} />
          <div className="flex flex-row justify-center items-center gap-x-36">
              <ButtonBorder text="Login" link="/pages/sign-in" />
              <ButtonBorder text="Signup" link="/pages/sign-up"/>
          </div>
          
      
    </div>)
  );
}
