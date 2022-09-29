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

        <button className="text-xl p-3 border-2 rounded-md border-red-500 bg-red-500 text-white">
          <Link to="/admin/upload-product">UPLOAD PRODUCTS</Link>
        </button>
      </div>

      <div className="py-8 px-40">
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div className="mt-8 grid grid-cols-3 gap-10">
            {products.map((product) => (
              <div className="card hover:shadow-lg" key={product._id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-fit h-fit object-cover"
                />
                <div className="m-4 border-b border-gray-300 pb-2">
                  <span className="font-bold text-lg">{product.name}</span>
                  <span className="block text-gray-500 text-base">
                    {product.details}
                  </span>
                  <span className="font-bold text-xl">₦{product.price}</span>
                </div>
                <div className="m-4 flex justify-between items-center">
                  <button className="font-bold text-center text-base p-2 border rounded border-blue-500 text-white bg-blue-500 hover:bg-blue-700 transition ease-in-out duration-500">
                    EDIT PRODUCT
                  </button>
                  <button className="font-bold text-center text-base p-2 border rounded border-red-500 text-white bg-red-500 hover:bg-red-700 transition ease-in-out duration-500">
                    REMOVE PRODUCT
                  </button>
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
