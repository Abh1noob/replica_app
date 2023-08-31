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
      <div className="h-[100vh] flex flex-row">

        <div className="h-[100vh] w-[50vw] overflow-auto">
          {/* Left Div */}
          <motion.div
            className="absolute flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-[#2c0ac4]"
            initial={{ width: "100vw" }}
            animate={{ width: "50vw" }}
            transition={{ delay: 3 }}
          >
            <Logo />
          </motion.div>

        </div>

        {/* Right Div */}
        <div className="h-[100vh] w-[50vw] bg-black  p-[1rem] overflow-y-auto">
          <motion.div
            className="h-[30rem] w-[45vw] bg-[#ff0101] m-[1rem]"
            initial={{ x: 705 }}
            animate={{ x: 0 }}
            transition={{
              type: "just",
              delay: 3.1,
            }}
          ></motion.div>

          <motion.div
            className="h-[30rem] w-[45vw] bg-[#fff701] m-[1rem]"
            initial={{ x: 705 }}
            animate={{ x: 0 }}
            transition={{
              type: "just",
              delay: 3.2,
            }}
          ></motion.div>

          <motion.div
            className="h-[30rem] w-[45vw] bg-[#01ffea] m-[1rem]"
            initial={{ x: 705 }}
            animate={{ x: 0 }}
            transition={{
              type: "just",
              delay: 3.2,
            }}
          ></motion.div>

          <motion.div
            className="h-[30rem] w-[45vw] bg-[#ff01ee] m-[1rem]"
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