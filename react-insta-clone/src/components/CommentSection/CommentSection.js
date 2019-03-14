import PropTypes from "prop-types";
import React from "react";
import Comment from "../Comment/Comment";

export default function CommentSection(props) {
  const commentList = props.commentList.map((comment, index) => (
    <Comment key={index} comment={comment} />
  ));
  console.log(props);
  return <div>{commentList}</div>;
}

CommentSection.propTypes = {
  commentList: PropTypes.array
};
