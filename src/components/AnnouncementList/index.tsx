import Card from "../Card";

type Props = {
  list: any[];
};

const AnnouncementList = ({ list }: Props) => {
  return (
    <>
      <div>
        {list.map(({ title, price }, index) => (
          <Card title={title} price={price} />
        ))}
      </div>
    </>
  );
};

export default AnnouncementList;
