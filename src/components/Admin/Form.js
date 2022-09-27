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
      <h4 className="form-header">
        Upload Product
      </h4>

      <div className="pt-6 pb-52 px-40">
        <form onSubmit={handleSubmit}>
          <label className="product-label">
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            required
            className="product-input"
            value={productData.name}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
          <label className="product-label">
            Product Details:
          </label>
          <textarea
            name="details"
            placeholder="Product Details"
            required
            className="product-input"
            value={productData.details}
            onChange={(e) =>
              setProductData({ ...productData, details: e.target.value })
            }
          />
          <label className="product-label">
            Product Price:
          </label>
          <input
            type="text"
            name="price"
            placeholder="Product Price"
            required
            className="product-input"
            value={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
          />
          <label className="product-label">
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
            className="upload-btn"
          >
            UPLOAD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
