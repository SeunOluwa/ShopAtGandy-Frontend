import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";

import { fetchProducts } from "../../api";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);
  const [productId, setProductId] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts();

      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Some error occured");
    }
  };

  const handleOnClose = () => setShowMyModal(false);

  const editProduct = () => {
    setShowMyModal(true);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="dashboard-header">
        <p className="dashboard-logo">Shop@Gandy Dashboard</p>

        <button className="upload-products-btn">
          <Link to="/admin/upload-product">UPLOAD PRODUCTS</Link>
        </button>
      </div>

      <div className="products">
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div className="product">
            {products.map((product) => (
              <div
                className="card"
                key={product._id}
                onClick={() => setProductId(product._id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-info">
                  <span className="product-name">{product.name}</span>
                  <span className="product-details">{product.details}</span>
                  <span className="product-price">₦{product.price}</span>
                </div>
                <div className="product-edit-remove-btns">
                  <button className="product-edit-btn" onClick={editProduct}>
                    EDIT PRODUCT
                  </button>
                  <button className="product-remove-btn">REMOVE PRODUCT</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal
        onClose={handleOnClose}
        visible={showMyModal}
        products={products}
        productId={productId}
      />
    </>
  );
};

export default Dashboard;
