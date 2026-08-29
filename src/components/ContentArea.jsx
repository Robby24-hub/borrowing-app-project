import { Route, Routes } from "react-router";
import HomePage from "../pages/home/HomePage";
import InventoryPage from "../pages/inventory/InventoryPage";
import BorrowPage from "../pages/borrow/BorrowPage";
import PeoplePage from "../pages/people/PeoplePage";
import SettingsPage from "../pages/settings/SettingsPage";
import PageNotFound from "../pages/PageNotFound";

export default function ContentArea() {
  return (
    <div className="w-[calc(100%-200px)] ml-50 h-[calc(100%-76px)] mt-19 bg-[#fdfdfd] px-10 py-5 overflow-y-auto scrollbar-none">
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
