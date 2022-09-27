import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

import { uploadProduct } from "../../api";

const Form = () => {
  const [productData, setProductData] = useState({
    name: "",
    details: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  const createProduct = async () => {
    try {
      await uploadProduct(productData);
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setProductData({ name: "", details: "", price: "", image: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createProduct();
    navigate("/admin-home");
    clear();
  };

  return (
    <div>
      <h4 className="pt-8 text-2xl font-extrabold text-center">
        Upload Product
      </h4>

      <div className="pt-6 pb-52 px-40">
        <form onSubmit={handleSubmit}>
          <label className="block mb-1 text-lg font-semibold">
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            required
            className="outline-none w-full py-3 pl-3 mb-3 border rounded-md"
            value={productData.name}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
          <label className="block mb-1 text-lg font-semibold">
            Product Details:
          </label>
          <textarea
            name="details"
            placeholder="Product Details"
            required
            className="outline-none w-full py-3 pl-3 mb-3 border rounded-md"
            value={productData.details}
            onChange={(e) =>
              setProductData({ ...productData, details: e.target.value })
            }
          />
          <label className="block mb-1 text-lg font-semibold">
            Product Price:
          </label>
          <input
            type="text"
            name="price"
            placeholder="Product Price"
            required
            className="outline-none w-full py-3 pl-3 mb-3 border rounded-md"
            value={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
          />
          <label className="block mb-1 text-lg font-semibold">
            Product Image:
          </label>
          <div className="my-3">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setProductData({ ...productData, image: base64 })
              }
            />
          </div>
          <button
            type="submit"
            className="text-center font-black mt-7 mb-7 py-3 border rounded-md border-blue-800 bg-blue-800 text-white w-full"
          >
            UPLOAD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
