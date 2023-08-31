"use client";
import React, { useState, useEffect } from "react";
import Logo from "./logo";
import { motion, useAnimation } from "framer-motion";


  export default function Background() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const controls = useAnimation();
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      if (scrollPosition > 0) {
        controls.start({ x: 0 });
      } else {
        controls.start({ x: 705 });
      }
    }, 5000); 

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [scrollPosition, controls]);

  return (
    <>
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
      <div className="h-[100vh] w-[50vw] bg-black ml-[50vw] flex flex-col gap-[2vh] p-[1rem]">
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
    <div>
      {/* Left Div */}
      <motion.div
        className="absolute flex items-center justify-center h-[100vh] w-[100vw] bg-[#2c0ac4] text-5xl uppercase text-center "
        initial={{ width: "100vw" }}
        animate={{ width: "50vw" }}
        transition={{ delay: 3}}
      >
       Welcome to Code Chef VIT
      </motion.div>

      {/* Right Div */}
      <div className="h-[100vh] w-[50vw] bg-black ml-[50vw] flex flex-col gap-[2vh] p-[1rem]">
        <motion.div
          className="h-[48vh] w-[48vw] bg-[#01ff34]"
          initial={{ x: 705 }}
          animate={{ x: 0 }}
          transition={{
            type: "just",
            delay: 3.0,
          }}
        ></motion.div>

        <motion.div
          className="h-[48vh] w-[48vw] bg-[#01ff34]"
          initial={{ x: 705 }}
          animate={{ x: 0 }}
          transition={{
            type: "just",
            delay: 3.0,
          }}
        ></motion.div>
      </div>
    </div>
    </>
  );
}

