import React, { useState } from "react";

export default function Comment({ comments }) {
  const [isShowComment, setIsShowComment] = useState(false);
  function showComment(){
      setIsShowComment(!isShowComment);
  }
  return (
    <div className="Comment">
      <button onClick={showComment}>
        {isShowComment ? "Hide" : "Show"} Comments
      </button>
      <hr />

      {isShowComment && (
        <div>
          <h2>{comments.length} Comment</h2>
          {comments.map((comment) => [
            <div key={comment.id}>
              <h3>{comment.user}</h3>
              <p>{comment.comment}</p>
            </div>,
          ])}
        </div>
      )}
    </div>
  );
}
