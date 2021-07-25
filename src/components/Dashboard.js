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
  const [sortField, setSortField] = useState("name")
  const [sortWay, setSortWay] = useState("asc")
  const [items, setItems] = useState([]);

    const handleSort = (field,way) => {
        // console.log(field,way)
        setSortField(field)
        setSortWay(way)
    }

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
      .orderBy(sortField,sortWay)
      .onSnapshot((doc) =>
        // console.log(doc.docs)
        setItems(
          doc.docs.map((doc) => ({
            id: doc.id,
            product: doc.data(),
          }))
        )
      );
      handleCloseNewProduct()
  }, [sortField,sortWay,]);

//   using firebase firestore for getting data from database, and 
// updating on every change, and pass it to state

//   console.log(items);
  return (
    <div className="dashboard">
      <NewProduct open={openNewProduct} handleClose={handleCloseNewProduct} />
      <DeleteModal open={openDelete} handleClose={handleCloseDelete} />
      <div className="itemsList">
        {items.map((product) => ( //using map for itterating items
          <Item key={product.id} product={product} openDeleteModal={openDeleteModal} />
        ))}{" "}
      </div>
      <BottomNavigation handleSort={handleSort} openNewProduct={openNewProductModal} />
    </div>
  );
}

export default Dashboard;
