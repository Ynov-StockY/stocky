import classes from "./classes.module.css";
import Card from "../Card";
import { useNavigate } from "react-router-dom";

type Props = {
  list: any[];
};

const AnnouncementList = ({ list }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.list}>
        {list.map(({ title, price }, index) => (
          <div
            className={classes.card}
            onClick={() => navigate(`/announcements/${index}`)}
          >
            <Card key={index} title={title} price={price} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AnnouncementList;
