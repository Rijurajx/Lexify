"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { TypeWriter } from "./typeWriter";
const LampBlock = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-slate-300 to-slate-300 py-4 bg-clip-text text-center text-7xl font-medium tracking-tight text-transparent md:text-9xl"
        >
          Lexify
              </motion.h1>
              <TypeWriter />
              
              
      </LampContainer>
    </>
  );
};

export default LampBlock;
