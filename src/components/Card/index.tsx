import classes from "./styles.module.css";

type CardProps = {
  title: string;
  price: string;
};

export default function Card(props: CardProps) {
  return (
    <>
      <div className={classes.card}>
        <img src="/assets/images/sneaker.png" className={classes.card_image} />
        <h6 className={classes.card__title}>{props.title}</h6>
        <p className={classes.card__subtitle}> {props.price}</p>
      </div>
    </>
  );
}
