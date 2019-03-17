import React from 'react';

const PostHeader = props => {
    return(
        <div>
            <div>
                <img alt="post header" src={props.thumbnail}/>
            </div>
            <div>
                {props.username}
            </div>
        </div>
    );
};

export default PostHeader;