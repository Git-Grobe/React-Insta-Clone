import React, { Component } from "react";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      filteredPosts: []
    };
  }

  handleSearch = search => {
    const filteredPosts = this.state.data.filter(post => {
      return post.username.includes(search);
    });
    this.setState({ filteredPosts });
  };
  render() {
    const allPosts = this.state.data.map(post => (
      <PostContainer key={post.username} post={post} />
    ));
    const filteredPosts = this.state.filteredPosts.map(post => (
      <PostContainer key={post.username} post={post} />
    ));
    return (
      <>
        <SearchBar searchPosts={this.handleSearch} />
        {/* {allPosts} */}
        {this.state.filteredPosts.length > 0 ? filteredPosts : allPosts}
      </>
    );
  }
}

export default App;
