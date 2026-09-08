export default function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="inline-flex bg-paper border border-line rounded-full p-1">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
            value === option
              ? "bg-ledger text-white"
              : "text-ink/60 hover:text-ink"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
