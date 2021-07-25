import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";
import { db } from "./firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "300px",
  },
}));

export default function EditInfo({ id, open, handleClose }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [weight, setWeight] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    db.collection("products")
      .doc(id)
      .get()
      .then((res) => {
        setName(res.data().name);
        setCount(res.data().count);
        setDescription(res.data().description);
        setUrl(res.data().url);
        setWeight(res.data().weight);
      });
  }, []);

  const handleSubmit = () => {
    let ref = db.collection("products").doc(id);
    ref.get().then((doc) => {
      
        ref
          .update({
            name: name,
            count: Number(count),
            description: description,
            url: url,
            weight: weight,
          })
     
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">New product</h2>
            <form autoComplete="off">
              <div className={classes.root}>
                <TextField
                  className={classes.textField}
                  error={name.length < 3 || name.length > 32}
                  id="standard-name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  helperText="Please provide from 3 to 32 characters."
                />
                <TextField
                  className={classes.textField}
                  error={!url}
                  id="standard-url"
                  label="Image url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  helperText="Please provide image url"
                />
                <TextField
                  className={classes.textField}
                  error={!count}
                  id="standard-count"
                  label="Count"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  helperText="Please provide count"
                />
                <TextField
                  className={classes.textField}
                  error={description.length < 8 || description.length > 128}
                  id="standard-description"
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  helperText="Please provide from 8 to 128 characters."
                />
                <TextField
                  className={classes.textField}
                  error={!weight.length}
                  id="standard-weight"
                  label="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  helperText="Please provide weight."
                />
                <span>{errors ? errors : ""}</span>
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
        </Fade>
      </Modal>
    </div>
  );
}
