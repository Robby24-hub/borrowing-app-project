export default function SideBarButton({ buttonText, icon: Icon, isActive }) {
  return (
    <button
      className={`flex flex-row my-2 w-full rounded-lg py-3 px-5 cursor-pointer  transition-all duration-300 
        ${isActive ? "bg-dark text-white" : "hover:bg-primaryBlue hover:text-white"}`}
    >
      <Icon size={25} />
      <span className="text-left ml-5">{buttonText}</span>
    </button>
  );
}
