import classes from "./classes.module.css";

type Props = {
  nbPages: number;
  page: string;
  changePage: (page: number) => void;
};

const Pagination = ({ nbPages, page, changePage }: Props) => {
  return (
    <div className={classes.links}>
      {page > "1" && (
        <a onClick={() => changePage(1)} className={classes.link}>
          &lt;
        </a>
      )}
      {Array.from({ length: nbPages }).map((_, i) => (
        <a
          key={i}
          onClick={() => changePage(i + 1)}
          className={`${classes.link} ${
            (i + 1).toString() === page ? classes.active : ""
          }`}
        >
          {i + 1}
        </a>
      ))}
      {Number(page) < nbPages && (
        <a
          onClick={() => changePage(Number(page) + 1)}
          className={classes.link}
        >
          &gt;
        </a>
      )}
    </div>
  );
};

export default Pagination;
