import { ReactNode } from "react";
import style from "./style.module.css";

type Props = {
  variant?: "heading1" | "heading2" | "heading3" | "body1" | "body2";
  align?: "left" | "center" | "right";
  className?: string;
  children: ReactNode;
};

const Typography = ({
  variant = "body1",
  align = "left",
  className,
  children,
}: Props) => {
  const variants = {
    heading1: "h1",
    heading2: "h2",
    heading3: "h3",
    body1: "p",
    body2: "p",
  } as const;

  const Component = variants[variant];

  return (
    <Component
      className={`${style.typography} ${variant ? style[variant] : ""} ${
        align ? style[align] : ""
      } ${className ? className : ""}`}
    >
      {children}
    </Component>
  );
};

export default Typography;
