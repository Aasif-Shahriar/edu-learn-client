import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";
import ThemeProvider from "./provider/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
