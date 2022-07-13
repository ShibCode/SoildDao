import React from "react";
import "./Member.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Member({ photo, name, title }) {
  return (
    <div className="member">
      <div className="member-photo">
        <img src={photo} alt="Member" />
      </div>
      <h1 className="member-name">{name}</h1>
      <p className="member-title">{title}</p>
      <div className="socials">
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
}
