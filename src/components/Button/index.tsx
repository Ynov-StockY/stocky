import classes from "./styles.module.css";

type ButtonProps = {
  name: string;
};
export default function Button({ name }: ButtonProps) {
  return (
    <button className={classes.button} name={name}>
      Exemple
    </button>
  );
}
