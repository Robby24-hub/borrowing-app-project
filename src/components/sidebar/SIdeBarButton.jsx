export default function SideBarButton({ buttonText, icon, isActive }) {
  console.log(isActive);
  return (
    <button
      className={`flex flex-row my-2 w-full rounded-lg py-3 px-5 cursor-pointer hover:bg-[#47e79f] transition-all duration-300 ${isActive ? "bg-[#facb4e] hover:bg-[#facb4e]" : "bg-transparent"}`}
    >
      <img className="aspect-square w-6" src={icon} />
      <span className="text-left ml-5">{buttonText}</span>
    </button>
  );
}
