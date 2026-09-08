import { ChevronDown, SearchIcon } from "lucide-react";

export default function PeopleControls() {
  return (
    <div className="mb-6 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between border border-line rounded-lg bg-white px-3 py-3">
      <button className="inventory-button justify-start grow lg:max-w-xs">
        <SearchIcon size={18} /> Search people
      </button>

      <button className="inventory-button">
        Sort: Recent activity <ChevronDown size={16} />
      </button>
    </div>
  );
}
