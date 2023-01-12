type Props = {
  list: any[];
};

const AnnouncementList = ({ list }: Props) => {
  return (
    <>
      <div>
        {list.map(({ name }, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </>
  );
};

export default AnnouncementList;
