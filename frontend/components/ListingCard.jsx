import "../style/cards.css";
import { Link } from "react-router-dom";
import DetailButton from "./DetailButton";
import MailButton  from "./MailButton";

export default function ListingCard({listing}){
  return (
    <div key={listing.id} className="card-container" >
        <div className="card-title">{listing.title}</div>
        <div className="card-jobtitle">{listing.company.name}</div>
        <div className="card-date">{listing.start_date}</div>

        <div className="card-actions">
          <DetailButton
            key={listing.id} listing={listing}>
          </DetailButton>
          <MailButton 
            key={listing.id} listing={listing}>
          </MailButton>
        </div>
    </div>
  );
};

