import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Form from "./Form";

const Admin = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/upload-product" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Admin;
