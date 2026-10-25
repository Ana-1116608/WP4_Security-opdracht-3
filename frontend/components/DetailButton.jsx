import "../style/button.css";
import { Link } from "react-router-dom";

export default function DetailButton({listing}){
  return (
          <Link to={`/details/${listing.id}`} className="detail-link">Bekijk afstudeerproject</Link>
  );
};
