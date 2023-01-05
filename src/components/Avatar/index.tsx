import './style.css';

type AvatarProps = {
    src?: string;
    name: string;
    color?: string;
    bgColor?: string;
};

export default function Avatar({ src, name, color, bgColor }: AvatarProps) {

  const initials = name.split(' ').map((n) => n[0]).join('');


  return (
    <>
      <div className='avatar-container avatar-img' style={{ backgroundColor:`${bgColor ? bgColor : "black"}`, backgroundImage: `url(${src})`, border:`10px solid ${color? color : "silver"}`}}>{src ? '' : initials}
        </div>
    </>
  );
} 