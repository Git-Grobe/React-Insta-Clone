import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return(
        <div>
            <span>{props.comment.text}</span>
            <span><strong>{props.comment.username}</strong></span>
        </div>
    );
};

Comment.propTypes = {
    comments: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;