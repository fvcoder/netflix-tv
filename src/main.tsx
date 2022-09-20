import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Layout } from "./feactures/layout";
import "./index.scss";
import IndexPage from "./router";
import PlayerPage from "./router/player";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root") as HTMLElement;
  root.classList.add("netflix-logo-out");
  setTimeout(() => {
    if (root !== null) {
      ReactDOM.createRoot(root).render(
        <React.StrictMode>
          <HashRouter>
            <Routes>
              <Route path="/:id" element={<PlayerPage />} />
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<IndexPage />} />
              </Route>
            </Routes>
          </HashRouter>
        </React.StrictMode>
      );
    }
  }, 1000);
});
