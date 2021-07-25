import { Button } from "@material-ui/core";
import React from "react";
import "./BottomNavigation.css";
import SortSelector from "./SortSelector";

function BottomNavigation({openNewProduct}) {
  return (
    <div className="navigation">
      <div className="nav-item">
        <SortSelector />
      </div>
      <div className="nav-item">
        {" "}
        <Button variant="outlined" color="primary" onClick={openNewProduct}>
          New product
        </Button>
      </div>
      {/* <div className="nav-item"></div> */}
    </div>
  );
}

export default BottomNavigation;
