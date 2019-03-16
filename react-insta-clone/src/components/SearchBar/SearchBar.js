import React, { Component } from "react";
import {
  FaInstagram,
  FaRegCompass,
  FaRegHeart,
  FaRegUser
} from "react-icons/fa/";
import logo from "../../img/Instagram-logo.png";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedUser: ""
    };
  }

  handleSearchUpdate = event => {
    const searchedUser = event.target.value;
    this.setState({ searchedUser });
    this.props.searchPosts(event.target.value);
  };

  render() {
    return (
      <div className="searchBar">
        <FaInstagram size={30} />
        <img src={logo} alt="Instagram Logo" />
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchedUser}
          onChange={this.handleSearchUpdate}
        />
        <FaRegCompass size={30} />
        <FaRegHeart size={30} />
        <FaRegUser size={30} />
      </div>
    );
  }
}

export default SearchBar;
