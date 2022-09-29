import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchProducts } from "../../api";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts();
      console.log(response.data.products);

      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Some error occured");
    }
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
              <div className="card" key={product._id}>
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
                  <button className="product-edit-btn">EDIT PRODUCT</button>
                  <button className="product-remove-btn">REMOVE PRODUCT</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
