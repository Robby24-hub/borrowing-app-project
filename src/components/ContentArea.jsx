import { Route, Routes } from "react-router";
import HomePage from "../pages/home/HomePage";
import InventoryPage from "../pages/InventoryPage";
import BorrowPage from "../pages/BorrowPage";
import PeoplePage from "../pages/PeoplePage";
import SettingsPage from "../pages/SettingsPage";
import PageNotFound from "../pages/PageNotFound";

export default function ContentArea() {
  return (
    <div className="w-[calc(100%-200px)] ml-50 h-[calc(100%-76px)] mt-19 bg-white p-10">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/borrow" element={<BorrowPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
