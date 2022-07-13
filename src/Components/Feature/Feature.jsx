import React from "react";
import "./Feature.css";

export default function Feature({ title, description }) {
  return (
    <div className="feature">
      <div className="feature-img"></div>
      <h1 className="feature-heading">{title}</h1>
      <p className="feature-para">{description}</p>
    </div>
  );
}
