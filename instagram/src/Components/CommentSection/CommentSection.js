import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    };

    commentHandler = e => {
        this.setState({comment: e.target.value});
    }

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = { username: "johnnybravo", text: this.state.comment};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ''})
    }

    render() {
        return(
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput comment={this.state.comment} submitComment={this.handleCommentSubmit} changeComment={this.commentHandler}/>
            </div>
        );
    };
}

export default CommentSection;