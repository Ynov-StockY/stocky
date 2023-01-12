import React from "react";
import { ReactNode } from "react";
import classes from "./classes.module.css";

type Props = {
  icon: ReactNode;
  onClick: (...params: any) => void;
};

const IconButton = ({ icon, onClick }: Props) => {
  const [pulse, setPulse] = React.useState<boolean>(false);
  return (
    <div
      onClick={() => {
        onClick();
        setPulse(true);
      }}
      className={`${classes.btn} ${pulse && classes.pulse}`}
      onAnimationEnd={() => setPulse(false)}
    >
      {icon}
    </div>
  );
};

export default IconButton;
