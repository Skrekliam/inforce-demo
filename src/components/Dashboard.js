import React from "react";
import Item from "./Item";
import "./Dashboard.css";
import NewProduct from "./NewProduct";
import DeleteModal from "./DeleteModal";

function Dashboard() {
  return (
    <div className="dashboard">
      <NewProduct />
      <DeleteModal />
      <div className="itemsList">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Dashboard;
