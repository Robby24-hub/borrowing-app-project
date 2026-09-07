import { PlusIcon } from "lucide-react";

export default function QuickActions() {
  const actions = ["Add item", "Add person", "Lend item"];

  return (
    <div className="mb-10">
      <h2 className="font-display text-lg font-medium mb-3">Quick actions</h2>
      <div className="flex flex-wrap gap-3">
        {actions.map((label) => (
          <button
            key={label}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ledger border border-ledger/30 rounded-full px-4 py-2 hover:bg-ledger hover:text-white hover:border-ledger transition-colors"
          >
            <PlusIcon className="w-4 h-4" strokeWidth={2} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
