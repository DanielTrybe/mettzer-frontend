import { Routes, Route } from "react-router-dom";
import { CardsPage, CardDetails } from "pages";
import { MainLayout } from "components/layouts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<CardsPage />} />
        <Route path="/:owner/:repo" element={<CardDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
