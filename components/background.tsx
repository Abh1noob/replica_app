"use client";
import React from "react";
import Logo from "./logo";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div>
      {/* Left Div */}
      <motion.div
        className="absolute flex items-center justify-center h-[100vh] w-[100vw] bg-[#2c0ac4]"
        initial={{ width: "100vw" }}
        animate={{ width: "50vw" }}
        transition={{ delay: 3 }}
      >
        <Logo />
      </motion.div>

      {/* Right Div */}
      <div className="h-[100vh] w-[50vw] bg-[#ff1101] ml-[50vw] flex flex-col gap-[2vh] p-[1rem]">
        <motion.div
          className="h-[48vh] w-[48vw] bg-[#01ff34]"
          initial={{ x: 705 }}
          animate={{ x: 0 }}
          transition={{
            type: "just",
            delay: 3.1,
          }}
        ></motion.div>

        <motion.div
          className="h-[48vh] w-[48vw] bg-[#01ff34]"
          initial={{ x: 705 }}
          animate={{ x: 0 }}
          transition={{
            type: "just",
            delay: 3.2,
          }}
        ></motion.div>
      </div>
    </div>
  );
}
