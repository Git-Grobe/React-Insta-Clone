import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa/";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

export default function PostContainer(props) {
  const { thumbnailUrl, username, imageUrl, likes } = props.post;
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
            <FaRegHeart size={25} />
            <FaRegComment size={25} />
          </div>
          <h2>{likes} likes</h2>
          <CommentSection commentList={props.post.comments} />
        </div>
      </div>
    </div>
  );
}
