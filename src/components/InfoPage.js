import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem";
import { db } from "./firebase";
import firebase from "firebase";
import "./InfoPage.css";
import EditInfo from "./EditInfo";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

function InfoPage() {
  const classes = useStyles();
  let { id } = useParams();
  const [item, setItem] = useState();
  const [comments, setComments] = useState([]);
  const [sender, setSender] = useState("");
  const [text, setText] = useState("");
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const openEditModal = (id) => {
    setOpenEdit(id);
  };


  useEffect(() => {
    db.collection("products")
      .doc(id)
      .onSnapshot((doc) => {
        console.log(doc);
        if (doc.exists) setItem({ id: doc.id, product: doc.data() });
      })
  }, [id]);

  useEffect(() => {
    if (!item) return;
    db.collection("products")
      .doc(id)
      .collection("comments")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
      handleCloseEdit()
  }, [item]);

  const handleSubmit = () => {
    if (!text && !sender) return;
    db.collection("products").doc(id).collection("comments").add({
      text: text,
      author: sender,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(()=>{
        setText("");
        setSender("");
    });
  };

  console.log("comments", comments);
  console.log(item, id);
  return (
    <div className="infoPage">
      {item ? (
        <>
          <div className="head">
            <div className="image">
              <Paper elevation={3}>
                <img src={item.product.url} alt={item.product.name} />
              </Paper>
            </div>
            <Paper elevation={3}>
              <div className="info">
                <h3>{item.product.name}</h3>
                <span>
                  {item.product.count} pieces, Weight: {item.product.weight}
                </span>
                <p>{item.product.description}</p>
              </div>
              <span className="editbtn" onClick={openEditModal}>Edit</span>
            </Paper>
          </div>
          <div className="commentSection">
            <Paper elevation={3}>
              <div className="comments">
                <h3>Comments</h3>
                {comments
                  ? comments.map((el) => <CommentItem item={el} />)
                  : "No comments"}
                  <br />
                  <br />
                <form autoComplete="off">
                  <div className={classes.root}>
                    <TextField
                      className={classes.textField}
                      error={!sender}
                      id="standard-sender"
                      label="Sender"
                      value={sender}
                      onChange={(e) => setSender(e.target.value)}
                      helperText="Please provide name"
                    />
                    <TextField
                      className={classes.textField}
                      error={!text}
                      id="standard-text"
                      label="Text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      helperText="Please provide text"
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </Paper>
          </div>
        </>
      ) : (
        <h1>No data for this product</h1>
      )}
      <EditInfo id={id} open={openEdit} handleClose={handleCloseEdit} />
    </div>
  );
}

export default InfoPage;
