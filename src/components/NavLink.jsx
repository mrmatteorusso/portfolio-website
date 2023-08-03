import React from "react";
import { useLocation, Link } from "react-router-dom";

function NavLink({ path, text }) {
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute);

  return (
    <Link
      className={`item-navbar ${currentRoute === path ? "item-navbar-current" : ""
        }`}
      to={path}
    >
      {text}
    </Link>
  );
}
export default NavLink;
