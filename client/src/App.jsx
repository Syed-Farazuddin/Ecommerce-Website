import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import About from "./pages/AboutPage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoutes.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import AdminRoutes from "./components/routes/AdminRoutes.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx";
import CreateCategory from "./pages/Admin/CreateCategory.jsx";
import Users from "./pages/Admin/Users.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard/" element={<AdminRoutes />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
