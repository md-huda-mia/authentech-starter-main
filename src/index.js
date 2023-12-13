import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
