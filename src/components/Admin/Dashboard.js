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
      <div className="flex justify-between items-center py-8 px-40">
        <p className="text-3xl font-extrabold">Shop@Gandy Dashboard</p>

        <button className="text-xl p-3 border-2 rounded-md border-red-500 hover:bg-red-500 hover:text-white">
          <Link to="/admin/upload-product">UPLOAD PRODUCTS</Link>
        </button>
      </div>

      <div>
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div>
            {products.map((product) => (
              <div key={product._id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <span>{product.name}</span>
                  <span>{product.details}</span>
                  <span>{product.price}</span>
                </div>
                <div>
                  <button>Edit Product</button>
                  <button>Remove Product</button>
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
