"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/codechef_logo.svg";
import { motion } from "framer-motion";

export default function Logo() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const logoAnimation = {
    initial: { y: 0 },
    animate: { y: -600 },
    transition: { duration: 20, delay: 30 },
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 10, y: 0 },
  };

  return (
    <div className=" fixed flex justify-center items-center h-screen">
      <motion.div
        className="z-1"
        variants={logoAnimation}
        initial="initial"
        animate="animate"
        transition="transition"
        onAnimationComplete={handleAnimationComplete}
      >
        <Image src={logo} alt="logo" className="h-[20rem] w-[20rem]" />
      </motion.div>

      {animationComplete && (
        <motion.div
          className="fixed text-center text-5xl uppercase mb-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
         welcome to code chef vit 
        </motion.div>
      )}
    </div>
  );
}
