import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return(
        <div>
        <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl}/>
            <div>
                <img alt="post thumbnail" src={props.post.imageUrl}/>
            </div>
            <CommentSection comments={props.post.comments}/>
        </div>
    );
};

export default Post;