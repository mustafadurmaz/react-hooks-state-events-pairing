import React, { useState } from "react";

export default function Header({
  title,
  views,
  createdAt,
  upvotes,
  downvotes,
}) {
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, setDownvote] = useState(downvotes);
  return (
    <div className="Header">
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
      <button
        onClick={() => {
          setUpvote(upvote + 1);
        }}
      >
        {upvote}
        <i className="fa fa-thumbs-up fa-1x" aria-hidden="true"></i>
      </button>
      <button
        onClick={() => {
          setDownvote(downvote - 1);
        }}
      >
        {downvote}
        <i className="fa fa-thumbs-down fa-1x" aria-hidden="true"></i>
      </button>
    </div>
  );
}
