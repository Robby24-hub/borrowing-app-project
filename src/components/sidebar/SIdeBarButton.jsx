export default function SideBarButton({ buttonText, icon: Icon, isActive }) {
  return (
    <button
      className={`flex flex-row items-center my-1 w-full rounded-lg py-2.5 px-4 cursor-pointer transition-colors duration-200
        ${isActive ? "bg-ledger text-white" : "text-ink/70 hover:bg-ledger/10 hover:text-ledger"}`}
    >
      <Icon size={20} strokeWidth={1.75} />
      <span className="text-left ml-4 text-sm font-medium">{buttonText}</span>
    </button>
  );
}
