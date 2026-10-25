import ListingCard from "../components/ListingCard";
import React, { useEffect, useState} from "react";
import Paginatie from "../components/Paginatie";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const [data, setData] = useState([]);
  

  useEffect(() => {
        fetch('/api/listings?offset=0&limit=100')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error(error));
  }, []); 

  const totalPages = Math.ceil(data.length / postsPerPage) || 1;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="view" >
      {currentPosts.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
      <Paginatie 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};
