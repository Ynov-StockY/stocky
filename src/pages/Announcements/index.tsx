import React from "react";
import { useSearchParams } from "react-router-dom";
import AnnouncementList from "../../components/AnnouncementList";
import Pagination from "../../components/Pagination";

const Announcements = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const changePage = (page: number) =>
    setSearchParams({ page: page.toString() });
  return (
    <>
      <AnnouncementList list={[]} />
      <Pagination nbPages={10} page={page} changePage={changePage} />
    </>
  );
};

export default Announcements;
