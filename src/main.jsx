// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { PhotoboothProvider } from "./context/PhotoboothContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PhotoboothProvider>
      <RouterProvider router={router} />
    </PhotoboothProvider>
  </React.StrictMode>
);