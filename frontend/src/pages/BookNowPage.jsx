import React from "react";
import BookNow from "../components/BookNow";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/fetch.hook";

const BookNowPage = () => {
  const [{ isLoading, apiData, serverError }] = useFetch();

  return (
    <div>
      <Navbar />
      <BookNow user={apiData} />
    </div>
  );
};

export default BookNowPage;
