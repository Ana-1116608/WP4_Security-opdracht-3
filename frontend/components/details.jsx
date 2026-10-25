import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { EmailShareButton, EmailIcon } from "react-share";


export const Details = () => {
  const currentPageUrl = window.location.href;

  const {id} = useParams();
  console.log(id);
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`/api/listings/${id}`)
      .then(response => response.json())
      .then(data => setListing(data))
      .catch(error => console.error(error));
  }, [id]);

if (!listing) {
    return <div>Loading...</div>;
  }

  const project = {
    id: listing.id,
    title: listing.title,
    date: listing.start_date,
    description: listing.description,
    company: listing.company?.name,
    contact: listing.contact?.name,
    email: listing.contact?.email
  };

  const saveProject = () => {

    const bestaandeproject =
    JSON.parse(localStorage.getItem("savedProject")) || [];

    const alreadysaved = bestaandeproject.find(
      (item) => item.id === project.id
    );

    if (!alreadysaved) {
      const updateProject = [...bestaandeproject, project];
      localStorage.setItem("savedProject", JSON.stringify(updateProject));
      alert("Project opgeslagen");
      } else {
        alert ("Project bestaat al");
      }
    };

    const Savebutton = () => {
    saveProject();
    window.location.href = "/saved_card";
    };


  

  return (
<div className="card-container2" >

    <div className="card-container" >
      <div className="card-title">{listing.title}</div>
      <div className="card-date">Begindatum: {listing.start_date}</div>
      <div className="card-description">{listing.description}</div>
      <div className="card-jobtitle">
        <p>{listing.company?.name}</p>
        <p>{listing.contact?.name}</p>
        <p>{listing.contact?.email}</p>
      </div>

      <div className="card-actions">
      <a href={`mailto:${listing.contact.email}`} className="mail-link">Mail</a>


      <div className="share-button">
        <EmailShareButton
        url={currentPageUrl}
        subject="Check out this job opportunity!"
        body="I found this job opportunity and thought you might be interested: "
        >
        Delen
        </EmailShareButton>
      </div>
      <button onClick={Savebutton} className="save-link">Save</button>


      </div>

      </div>
  </div>

  );
};
