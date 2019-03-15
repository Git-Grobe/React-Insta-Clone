import PropTypes from "prop-types";
import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.commentList,
      comment: ""
    };
  }

  componentDidMount() {
    this.setState({ comments: this.props.commentList });
    console.log(this.props);
  }

  addNewComment = event => {
    event.preventDefault();
    const newComment = { username: "BeefSupreme", text: this.state.comment };
    // this.setState(prevState => {
    //   return { comments: prevState.comments.push(newComment), comment: "" };//Does not work due to mutation
    // });
    const comments = this.state.comments.slice(); //does not mutate Arrary that is why it works

    comments.push(newComment);
    this.setState({ comments, comment: "" });
    console.log(this.state.comments);
  };

  handleCommentChange = event => {
    this.setState({ comment: event.target.value });
  };

  retrieveComments = () =>
    this.state.comments.map((comment, index) => (
      <Comment key={index} comment={comment} />
    ));

  render() {
    return (
      <div className="commentList">
        {this.retrieveComments()}
        <p className="timeStamp"> test</p>
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            onChange={this.handleCommentChange}
            placeholder="Add a comment..."
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  commentList: PropTypes.array
};

export default CommentSection;
