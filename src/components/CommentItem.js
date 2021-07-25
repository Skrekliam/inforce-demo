import React from "react";

function CommentItem({item}) {
    console.log(item)
  return (
    <div className="comment">
      <h4>{item.data.author }</h4>
      <p>{item.data.text }</p>
      <span>{new Date(item.data.time.seconds*1000).toDateString()}</span>
      <hr />
    </div>
  );
}

export default CommentItem;
