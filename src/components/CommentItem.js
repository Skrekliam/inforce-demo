import React from "react";

function CommentItem() {
  return (
    <div className="comment">
      <h4>Lorem.</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <span>{new Date().toDateString()}</span>
      <hr />
    </div>
  );
}

export default CommentItem;
