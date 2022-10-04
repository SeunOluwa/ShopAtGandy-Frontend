import React from "react";
import FileBase from "react-file-base64";

const Modal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const closeModal = (e) => {
    e.preventDefault();

    onClose();
  };

  if (!visible) return null;

  return (
    <div id="container" onClick={handleOnClose} className="modal">
      <div className="edit-product-modal">
        <h4 className="form-header">Edit Product</h4>

        <div className="edit-product-form">
          <form>
            <label className="product-label">Product Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              required
              className="product-input"
              //   value={productData.name}
              //   onChange={(e) =>
              //     setProductData({ ...productData, name: e.target.value })
              //   }
            />
            <label className="product-label">Product Details:</label>
            <textarea
              name="details"
              placeholder="Product Details"
              required
              className="product-input"
              //   value={productData.details}
              //   onChange={(e) =>
              //     setProductData({ ...productData, details: e.target.value })
              //   }
            />
            <label className="product-label">Product Price:</label>
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              required
              className="product-input"
              //   value={productData.price}
              //   onChange={(e) =>
              //     setProductData({ ...productData, price: e.target.value })
              //   }
            />
            <label className="product-label">Product Image:</label>
            <div className="my-3">
              <FileBase
                type="file"
                multiple={false}
                // onDone={({ base64 }) =>
                //   setProductData({ ...productData, image: base64 })
                // }
              />
            </div>
            <div className="update-close-btns">
              <button className="close-modal-btn" onClick={closeModal}>
                CLOSE
              </button>
              <button className="update-product-btn">UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
