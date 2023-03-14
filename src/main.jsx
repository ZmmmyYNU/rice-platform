import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./assets/font/iconfont.css";
import "./assets/styles/reset.css";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper";
import { AuthProvider } from "./context/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
