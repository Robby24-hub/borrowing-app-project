const navItems = ["Profile", "Appearance", "Notifications", "Preferences"];

export default function SettingsNav({ active, onSelect }) {
  return (
    <div className="lg:w-48 shrink-0">
      <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={`text-left text-sm font-medium px-4 py-2.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              active === item
                ? "bg-ledger text-white"
                : "text-ink/70 hover:bg-ledger/10 hover:text-ledger"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
