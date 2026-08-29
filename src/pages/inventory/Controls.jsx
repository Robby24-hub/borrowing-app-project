import { ChevronDown, PlusIcon, SearchIcon } from "lucide-react";

export default function Controls() {
  return (
    <div className="mb-5">
      <div className="shadow-xl flex flex-row justify-between border-2 border-primaryBlue rounded-lg w-full px-3 py-5">
        <button className="inventory-button justify-start grow">
          {<SearchIcon size={18} />} Search
        </button>
        <div className=" flex flex-row">
          <button className="inventory-button">
            All Category {<ChevronDown size={18} />}
          </button>
          <button className="inventory-button">
            All Status {<ChevronDown size={18} />}
          </button>
          <button className="inventory-button">
            Recently Added {<ChevronDown size={18} />}
          </button>
          <button className="inventory-button bg-primaryBlue text-white border-primaryBlue hover:shadow-[0_0_20px_#386aed]">
            {<PlusIcon size={18} />} Add New Item
          </button>
        </div>
      </div>
    </div>
  );
}
