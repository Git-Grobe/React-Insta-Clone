import React from "react";
import {
  FaInstagram,
  FaRegCompass,
  FaRegHeart,
  FaRegUser
} from "react-icons/fa/";
import logo from "../../img/Instagram-logo.png";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <FaInstagram size={30} />
      <img src={logo} alt="Instagram Logo" />
      <input type="text" placeholder="Search" />
      <FaRegCompass size={30} />
      <FaRegHeart size={30} />
      <FaRegUser size={30} />
    </div>
  );
}
