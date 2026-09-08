import { UsersRoundIcon, PlusIcon } from "lucide-react";

export default function PeopleEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center border border-dashed border-line rounded-lg py-16 px-6 bg-white">
      <div className="w-12 h-12 rounded-full bg-ledger/10 flex items-center justify-center mb-4">
        <UsersRoundIcon className="w-6 h-6 text-ledger" strokeWidth={1.5} />
      </div>
      <p className="font-display text-lg font-medium">No one on record yet</p>
      <p className="text-sm text-ink/50 mt-1 max-w-xs">
        People you lend items to will show up here once you make your first
        loan.
      </p>
      <button className="quick-action-button mt-5">
        <PlusIcon className="w-4 h-4" /> Add person
      </button>
    </div>
  );
}
