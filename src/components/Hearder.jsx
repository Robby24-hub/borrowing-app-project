import { BellIcon, ChevronDownIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="fixed bg-ink flex items-center flex-row justify-between w-full px-10 py-3 h-19 text-paper z-10">
      <div>
        <h1 className="cursor-pointer font-display font-medium text-2xl leading-tight">
          JusReturnIt<span className="text-ledger">.com</span>
        </h1>
        <p className="text-xs text-paper/50">Borrowing web app by Robby</p>
      </div>

      <div className="flex flex-row items-center gap-10 text-sm">
        <button className="cursor-pointer text-paper/70 hover:text-paper transition-colors">
          <BellIcon className="w-5 h-5" strokeWidth={1.75} />
        </button>

        <button className="flex flex-row items-center gap-3 cursor-pointer group">
          <span className="w-8 h-8 rounded-full bg-paper/10 flex items-center justify-center font-display text-sm">
            R
          </span>
          <span className="text-paper/90">Robby</span>
          <ChevronDownIcon className="w-4 h-4 text-paper/50 group-hover:text-paper transition-colors" />
        </button>
      </div>
    </div>
  );
}
