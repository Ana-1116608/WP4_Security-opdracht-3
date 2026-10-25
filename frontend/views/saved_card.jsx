import React, { useEffect, useState} from "react";
import SavedListingCard from "../components/SavedListingCard";
import Paginatie from "../components/Paginatie";
import "../style/cards.css";


export const SavedCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const [savedProjects, setSavedProjects] = useState([]);
  const currentPageUrl = window.location.href;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedProject")) || [];
    setSavedProjects(saved);
  }, []);

  
  const totalPages = Math.ceil(savedProjects.length / postPerPage) || 1;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = savedProjects.slice(firstPostIndex, lastPostIndex);


  

  return (
    <div className="card-container2" >
      {currentPosts.map((project) => (
        <SavedListingCard key={project.id} project={project} />
      ))}
      <Paginatie
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};
