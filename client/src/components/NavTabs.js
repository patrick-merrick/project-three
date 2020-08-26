import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard"
          className={
            location.pathname === "/Dashboard" ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profileCard"
          className={
            location.pathname === "/profileCard"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Profiles
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/editProfile"
          className={
            location.pathname === "/editProfile"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Edit
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/postAd"
          className={
            location.pathname === "/postAd" ? "nav-link active" : "nav-link"
          }
        >
          Ad
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
