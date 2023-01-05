import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  onClick: (...params: any) => void;
};

const IconButton = ({ icon, onClick }: Props) => {
  const animate = () => {};
  return (
    <div
      onClick={() => {
        animate();
        onClick();
      }}
    >
      {icon}
    </div>
  );
};

export default IconButton;
