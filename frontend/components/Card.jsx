import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/listings')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []); // Empty array ensures this runs once

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container2" >
      {data.map((listing) => (
        <div key={listing.id} className="card-container" >
          <div className="card-title">{listing.title}</div>
          <div className="card-jobtitle">{listing.company.name}</div>
          <div className="card-date">{listing.start_date}</div>

          <div className="card-actions">
          <Link to={`/details/${listing.id}`} className="detail-link">Bekijk afstudeerproject</Link>
          <a href={`mailto:${listing.contact.email}`} className="mail-link">Mail</a>
          </div>
        </div>
      ))}
    </div>
  );
};



