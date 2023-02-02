import React from "react";
import Image from "next/image";

interface LogoProps {
  width: number | `${number}`;
  height: number | `${number}`;
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <Image width={width} height={height} src="/logo.png" alt="main-logo" />
  );
};

export default Logo;
