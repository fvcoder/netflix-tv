import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root") as HTMLElement;
  root.classList.add("netflix-logo-out");
  setTimeout(() => {
    if (root !== null) {
      ReactDOM.createRoot(root).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
  }, 1000);
});
