import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";

let arr = [
  { name: "Home", drop: "" },
  {
    name: "Services",

    drop: ["For studients", "For studients", "For studients"]
  },
  { name: "Contact", drop: "" }
];

function App() {
  return (
    <div>
      <ul className="main-list">
        {arr.map((el, key) => (
          <NavBar name={el.name} key={key} drop={el.drop} />
        ))}
      </ul>
    </div>
  );
}
export default App;
