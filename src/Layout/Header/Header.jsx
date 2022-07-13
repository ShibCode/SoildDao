import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setScrollHeader(true) : setScrollHeader(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 0 ? setScrollHeader(true) : setScrollHeader(false);
      });
    };
  }, []);

  return (
    <>
      <header className={scrollHeader ? "scrolled-header" : ""}>
        <nav>
          <h1 className="logo">SoildDao</h1>
          <button
            className="hammenu-btn"
            onClick={() => {
              setNavOpen((prev) => !prev);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={navOpen ? "" : "show-hammenu-img"}
            />
            <FontAwesomeIcon
              icon={faClose}
              className={`nav-close-img {navOpen ? "show-hammenu-img" : ""}`}
            />
          </button>
          <div className={`nav-links ${navOpen ? "show-hammenu" : ""}`}>
            <div className="nav-link">Buy</div>
            <div className="nav-link">Stake</div>
            <div className="nav-link">Love Letters</div>
            <div className="nav-link">Resources</div>
            <button className="brown-bg-btn btn header-btn">Contact Now</button>
          </div>
        </nav>
        <div className={`overlay ${navOpen ? "show-overlay" : ""}`}></div>
      </header>
    </>
  );
}
