import { Paper } from "@material-ui/core";
import React from "react";
import CommentItem from "./CommentItem";
import "./InfoPage.css";

function InfoPage() {
  return (
    <div className="infoPage">
      <div className="head">
        <div className="image">
          <Paper elevation={3}>
            <img
              src="https://img2.zakaz.ua/src.1617221702.ad72436478c_2021-03-31_YuliaT/src.1617221702.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.150nowm.jpg.150x.jpg"
              alt="Image"
            />
          </Paper>
        </div>
        <Paper elevation={3}>
          <div className="info">
            <h3>Apple</h3>
            <span>12361231 pieces</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              aliquam?
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
    </div>
  );
}

export default InfoPage;
