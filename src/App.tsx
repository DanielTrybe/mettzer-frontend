import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import SeachArticlesProvider from "services/context/ArticlesList";
import AppRoutes from "routes/routes";

function App() {
  return (
    <BrowserRouter basename="mettzer-FrontEnd">
      <SeachArticlesProvider>
        <AppRoutes />
      </SeachArticlesProvider>
    </BrowserRouter>
  );
}

export default App;
