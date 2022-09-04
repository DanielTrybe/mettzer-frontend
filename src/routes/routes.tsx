import { Routes, Route, Navigate } from "react-router-dom";
import { CardsPage, CardDetails } from "pages";
import { MainLayout } from "components/layouts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<h1>404 Page not found!</h1>} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate replace to="/cardList" />} />
        <Route path="/cardList" element={<CardsPage />} />
        <Route path="/:owner/:repo" element={<CardDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
