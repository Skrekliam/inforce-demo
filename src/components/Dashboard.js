import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./Dashboard.css";
import NewProduct from "./NewProduct";
import DeleteModal from "./DeleteModal";
import BottomNavigation from "./BottomNavigation";
import { db } from "./firebase";
function Dashboard() {
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openNewProduct, setOpenNewProduct] = React.useState(false);
  const [items, setItems] = useState([]);

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const openDeleteModal = (id) => {
    setOpenDelete(id);
  };

  const handleCloseNewProduct = () => {
    setOpenNewProduct(false);
  };

  const openNewProductModal = () => {
    setOpenNewProduct(true);
  };

  useEffect(() => {
    db.collection("products")
      .get()
      .then((doc) =>
        // console.log(doc.docs)
        setItems(
          doc.docs.map((doc) => ({
            id: doc.id,
            product: doc.data(),
          }))
        )
      );
  }, []);
  console.log(items);
  return (
    <div className="dashboard">
      <NewProduct open={openNewProduct} handleClose={handleCloseNewProduct} />
      <DeleteModal open={openDelete} handleClose={handleCloseDelete} />
      <div className="itemsList">
        {items.map((product) => (
          <Item key={product.id} product={product} openDeleteModal={openDeleteModal} />
        ))}{" "}
      </div>
      <BottomNavigation openNewProduct={openNewProductModal} />
    </div>
  );
}

export default Dashboard;
