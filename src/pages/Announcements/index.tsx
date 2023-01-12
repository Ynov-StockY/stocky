import { useSearchParams } from "react-router-dom";
import AnnouncementList from "../../components/AnnouncementList";
import Pagination from "../../components/Pagination";

const Announcements = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const changePage = (page: number) =>
    setSearchParams({ page: page.toString() });

  const lists = [
    [
      { title: "Chaussure 001", price: "30 €" },
      { title: "Chaussure 002", price: "300 €" },
      { title: "Chaussure 003", price: "100 €" },
      { title: "Chaussure 004", price: "130 €" },
      { title: "Chaussure 005", price: "60 €" },
      { title: "Chaussure 006", price: "300 €" },
      { title: "Chaussure 007", price: "304 €" },
      { title: "Chaussure 008", price: "30 €" },
      { title: "Chaussure 009", price: "102 €" },
      { title: "Chaussure 010", price: "130 €" },
      { title: "Chaussure 011", price: "90 €" },
      { title: "Chaussure 012", price: "1300 €" },
    ],
    [
      { title: "Chaussure 011", price: "30 €" },
      { title: "Chaussure 012", price: "300 €" },
      { title: "Chaussure 013", price: "100 €" },
      { title: "Chaussure 014", price: "130 €" },
      { title: "Chaussure 015", price: "60 €" },
      { title: "Chaussure 016", price: "300 €" },
      { title: "Chaussure 017", price: "304 €" },
      { title: "Chaussure 018", price: "30 €" },
      { title: "Chaussure 019", price: "102 €" },
      { title: "Chaussure 020", price: "130 €" },
      { title: "Chaussure 021", price: "90 €" },
      { title: "Chaussure 022", price: "1300 €" },
    ],
  ];
  return (
    <>
      <AnnouncementList list={lists[Number(page) - 1] || []} />
      <Pagination nbPages={lists.length} page={page} changePage={changePage} />
    </>
  );
};

export default Announcements;
