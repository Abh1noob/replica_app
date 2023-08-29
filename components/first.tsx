import React from "react";
import Image from "next/image";
import logo from '@/public/assets/codechef_logo.svg';

export default function First() {
  return (
      <div className="">
        <Image src = {logo} alt = 'logo' className="h-[20rem] w-[20rem]" />
      </div>
  );
}
