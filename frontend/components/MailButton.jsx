import "../style/button.css";

export default function MailButton({listing}){
  const email = listing.email || listing.contact?.email;
  return (
          <a href={`mailto:${email}?subject=Solliteren voor ${listing.title}`} className="mail-link">Mail</a>
  );
};
