import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<h1 style={{ textAlign: "center" }}>...loading</h1>}>
    <App />
  </Suspense>
);
