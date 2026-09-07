import { ChevronDown, PlusIcon, SearchIcon } from "lucide-react";

export default function Controls() {
  return (
    <div className="mb-5">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-between rounded-lg bg-transparent py-3">
        <button className="inventory-button justify-start grow">
          <SearchIcon size={18} /> Search
        </button>
        <div className="flex flex-wrap gap-2">
          <button className="inventory-button">
            All category <ChevronDown size={16} />
          </button>
          <button className="inventory-button">
            All status <ChevronDown size={16} />
          </button>
          <button className="inventory-button">
            Recently added <ChevronDown size={16} />
          </button>
          <button className="inventory-button bg-ledger text-white border-ledger hover:bg-ledger/90">
            <PlusIcon size={18} /> Add new item
          </button>
        </div>
      </div>
    </div>
  );
}
