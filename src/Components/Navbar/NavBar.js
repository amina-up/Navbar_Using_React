import React from "react";
import "./NavBar.css";

const NavBar = ({ name, drop }) => {
  return (
    <li className={drop ? "mainlist" : ""}>
      {name}
      {drop && (
        <ul className="drop-down">
          {drop.map((el, key) => (
            <li key={key}>{el}</li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default NavBar;
