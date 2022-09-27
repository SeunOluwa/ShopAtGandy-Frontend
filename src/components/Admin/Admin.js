import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Form from "./Form";

const Admin = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-home" element={<Home />} />
        <Route path="/upload-product" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Admin;
