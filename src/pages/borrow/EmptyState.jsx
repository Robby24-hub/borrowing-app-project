import { HandHelpingIcon, PlusIcon } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center border border-dashed border-line rounded-lg py-16 px-6 bg-white">
      <div className="w-12 h-12 rounded-full bg-ledger/10 flex items-center justify-center mb-4">
        <HandHelpingIcon className="w-6 h-6 text-ledger" strokeWidth={1.5} />
      </div>
      <p className="font-display text-lg font-medium">Nothing out on loan</p>
      <p className="text-sm text-ink/50 mt-1 max-w-xs">
        Items you lend out will show up here so you can track who has them and
        when they're due back.
      </p>
      <button className="quick-action-button mt-5">
        <PlusIcon className="w-4 h-4" /> Lend to someone
      </button>
    </div>
  );
}
