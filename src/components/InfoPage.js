import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem";
import { db } from "./firebase";
import "./InfoPage.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function InfoPage() {
  let { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    db.collection("products")
      .doc(id)
      .get()
      .then((doc) => {
          console.log(doc)
        if (doc.exists) setItem({ id: doc.id, product: doc.data() });
      }).catch(err => console.log(err));
  }, []);

  console.log(item,id)
  return (
    <div className="infoPage">{item ?(<>
      <div className="head">
        <div className="image">
          <Paper elevation={3}>
            <img
              src={item.product.url}
              alt={item.product.name}
            />
          </Paper>
        </div>
        <Paper elevation={3}>
          <div className="info">
            <h3>{item.product.name}</h3>
            <span>{item.product.count} pieces, Weight: {item.product.weight}</span>
            <p>
            {item.product.description}
            </p>
          </div>
        </Paper>
      </div>
      <div className="commentSection">
        <Paper elevation={3}>
          <div className="comments">
            <h3>Comments</h3>
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </div>
        </Paper>
      </div>
    </>): (<h1>No data for this product</h1>)}
    </div>
  );
}

export default InfoPage;
