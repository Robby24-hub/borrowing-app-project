import { PlusIcon } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="mb-5 ">
      <h1 className="text-xl font-semibold mb-2">Quick Actions</h1>
      <div className="bg-white shadow-xl flex flex-row justify-between border-2 border-primaryBlue rounded-lg w-fit py-3 px-2">
        <button className="quick-action-button">{<PlusIcon />} Add Item</button>
        <button className="quick-action-button">
          {<PlusIcon />} Add Person
        </button>
        <button className="quick-action-button">
          {<PlusIcon />} Lend Item
        </button>
      </div>
    </div>
  );
}
