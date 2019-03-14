import React, { Component } from "react";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";

class App extends Component {
  render() {
    const allPosts = dummyData.map(post => (
      <PostContainer key={post.username} post={post} />
    ));
    return (
      <>
        <SearchBar />
        {allPosts}
      </>
    );
  }
}

export default App;
