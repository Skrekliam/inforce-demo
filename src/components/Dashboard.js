import React, { useState } from "react";
import Item from "./Item";
import "./Dashboard.css";
import NewProduct from "./NewProduct";
import DeleteModal from "./DeleteModal";
import BottomNavigation from "./BottomNavigation";

function Dashboard() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
      };

    const openDeleteModal = (id) => {
        setOpen(id);
    } 

  return (
    <div className="dashboard">
      <NewProduct />
      <DeleteModal open={open} handleClose={handleClose} />
      <div className="itemsList">
        <Item openDeleteModal={openDeleteModal} />
        <Item openDeleteModal={openDeleteModal} />
        <Item openDeleteModal={openDeleteModal} />
        <Item openDeleteModal={openDeleteModal} />
        <Item openDeleteModal={openDeleteModal} />
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Dashboard;
