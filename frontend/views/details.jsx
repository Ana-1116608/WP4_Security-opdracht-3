import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "../style/cards.css";
import { EmailShareButton, EmailIcon } from "react-share";
import { Toaster, toast } from "sonner";
import MailButton from "../components/MailButton"


export const Details = () => {
  const currentPageUrl = window.location.href;
  const {id} = useParams();
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
      toast.success("Project opgeslagen");
      return true;
      } else {
        toast.error("Project bestaat al");
        return false;
      }
    };

    const savelisting = () => {
      const saved = saveProject();
      if (saved) {
        setTimeout(() => {
          window.location.href = "/saved_card";
          }, 950);
        }
      };

    const copyLink = () => {
      navigator.clipboard.writeText(currentPageUrl)
        .then(() => {
          toast.success("Link is gekopieerd");
        })
        .catch((error) => {
          toast.error("Link kan niet worden gekopieerd");
        });
    };

return (
  <div className="card-container2" >
   <Toaster position="bottom-right" /> {}
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
        <MailButton
            key={listing.id} listing={listing}>
        </MailButton>
        <button onClick={copyLink} className="share-link">Delen</button>
        <button onClick={savelisting} className="save-link">Save</button>
        </div>

    </div>
  </div>
  );
};
