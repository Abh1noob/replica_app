"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/assets/codechef_logo.svg";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="z-10"
      initial={{ y: 0}}
      animate={{ y:-600}}
      transition={{duration: 0.5, delay: 1.5}}
    >
      <Image src={logo} alt="logo" className="h-[20rem] w-[20rem]" />
    </motion.div>
  );
}
