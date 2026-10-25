import React from "react";

const Paginatie = ({ currentPage, setCurrentPage, totalPages }) => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

  return (
    <div>
      <button 
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Vorige
      </button>

      {pages.map((page, index) => (
        <button 
          key={index}
          onClick={() => setCurrentPage(page)}
          style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
        >
          {page}
        </button>
      ))}

      <button 
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Volgende
      </button>
    </div>
  );
};

export default Paginatie;
