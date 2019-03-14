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
      <FaInstagram size={45} />
      <img src={logo} alt="Instagram Logo" />
      <input type="text" placeholder="Search" />
      <FaRegCompass size={45} />
      <FaRegHeart size={45} />
      <FaRegUser size={45} />
    </div>
  );
}
