import React, { Component } from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa/";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  handleClickLike = () => {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  };

  render() {
    const { thumbnailUrl, username, imageUrl } = this.props.post;
    const { likes } = this.state;
    console.log(this.state.likes);
    return (
      <div className="postContainer">
        <div className="postContainerHeader">
          <img src={thumbnailUrl} alt="thumbnail" />
          <h2>{username}</h2>
        </div>
        <div className="postContainerPost">
          <img src={imageUrl} alt="postImage" />
          <div className="postContainerMessages">
            <div className="postContainerLikes">
              <FaRegHeart size={25} onClick={this.handleClickLike} />
              <FaRegComment size={25} />
            </div>
            <h2>{likes} Likes</h2>
            <CommentSection commentList={this.props.post.comments} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostContainer;
