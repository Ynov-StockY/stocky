import React from "react";
import style from "./style.module.css";

type iconProps = {
  src: string;
  alt: string;
  size: "sm" | "md" | "lg";
};

export default function Icon({ src, alt, size }: iconProps) {
  return <img className={`${style.icon} ${style[size]}`} src={src} alt={alt} />;
}
