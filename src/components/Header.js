import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header--inner">
        <h6>todoto.</h6>
        <div className="header--user"></div>
      </div>
      <div className="header--line"></div>
    </header>
  );
}
