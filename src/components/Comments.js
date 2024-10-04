import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <p dangerouslySetInnerHTML={{ __html: comment.text }} />
        </div>
      ))}
    </div>
  );
};

export default Comments;

