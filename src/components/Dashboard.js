import React, { useState } from "react";
import Item from "./Item";
import "./Dashboard.css";
import NewProduct from "./NewProduct";
import DeleteModal from "./DeleteModal";
import BottomNavigation from "./BottomNavigation";

function Dashboard() {
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openNewProduct, setOpenNewProduct] = React.useState(false);
    const handleCloseDelete = () => {
        setOpenDelete(false);
      };

    const openDeleteModal = (id) => {
        setOpenDelete(id);
    } 

    const handleCloseNewProduct = () => {
        setOpenNewProduct(false);
      };

    const openNewProductModal = () => {
        setOpenNewProduct(true);
    } 


  return (
    <div className="dashboard">
      <NewProduct open={openNewProduct} handleClose={handleCloseNewProduct} />
      <DeleteModal open={openDelete} handleClose={handleCloseDelete} />
      <div className="itemsList">
        <Item openDeleteModal={openDeleteModal} />
        <Item openDeleteModal={openDeleteModal} />
        <Item openDeleteModal={openDeleteModal} />
        <Item openDeleteModal={openDeleteModal} />
        <Item openDeleteModal={openDeleteModal} />
      </div>
      <BottomNavigation openNewProduct={openNewProductModal} />
    </div>
  );
}

export default Dashboard;
