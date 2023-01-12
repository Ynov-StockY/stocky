import classes from './styles.module.css';

export default function Home() {
  return (
    <>
      <div className={classes.app}> 
        <img src ="/assets/images/hero.png" alt="hero" className={classes.hero_img} />
      </div>
    </>
  );
}
