import React, { useEffect, useState} from "react";
import "./saved_card.css";
import { EmailShareButton } from "react-share";

export const SavedCard = () => {
  const [savedProjects, setSavedProjects] = useState([]);
  const currentPageUrl = window.location.href;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedProject")) || [];
    setSavedProjects(saved);
  }, []);

return (
    <div className="card-container2" >
      {savedProjects.map((project) => (
    <div key={project.id} className="card-container" >
      <div className="card-title">{project.title}</div>
      <div className="card-date">Begindatum: {project.date}</div>
      <div className="card-description">{project.description}</div>
      <div className="card-jobtitle">
        <p>{project.company}</p>
        <p>{project.contact}</p>
        <p>{project.email}</p>
      </div>

      <div className="card-actions">
      <a href={`mailto:${project.email}`} className="mail-link">Mail</a>


      <div className="share-button">
        <EmailShareButton
        url={currentPageUrl}
        subject="Check out this job opportunity!"
        body="I found this job opportunity and thought you might be interested: "
        >
        Delen
        </EmailShareButton>
        </div>

          </div>
        </div>
      ))}
    </div>
  );
};
