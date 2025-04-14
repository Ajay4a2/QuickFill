// Navbar.jsx
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import './styles/Navbar.css'; // Create a separate CSS file for Navbar styling

function Navbar() {
  return (
    <header className="shadow">
      <a href=""></a>
      <nav>
        <ul>
          <li>Sentence Construction</li>
        </ul>
      </nav>
      <a href="">
        <BsThreeDotsVertical />
      </a>
    </header>
  );
}

export default Navbar;
