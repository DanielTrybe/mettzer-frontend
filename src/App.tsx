import React from "react";
import "./App.css";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import SeachArticlesProvider from "services/context/ArticlesList";
import AppRoutes from "routes/routes";

function App() {
  if (window.location.pathname === "/") {
    window.location.pathname = "mettzer-frontEnd";
  }
  return (
    <BrowserRouter basename="mettzer-frontEnd">
      <SeachArticlesProvider>
        <AppRoutes />
      </SeachArticlesProvider>
    </BrowserRouter>
  );
}

export default App;
