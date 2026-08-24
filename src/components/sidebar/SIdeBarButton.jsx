import { useState } from "react";

export default function SideBarButton({
  buttonText,
  iconWhite,
  iconBlack,
  isActive,
}) {
  const [isHovered, setIsHovered] = useState(false);

  function handleSideBarButtonHover() {
    setIsHovered(!isHovered);
  }

  return (
    <button
      className={`flex flex-row my-2 w-full rounded-lg py-3 px-5 cursor-pointer  transition-all duration-300 
        ${isActive ? "bg-dark text-white" : "hover:bg-primaryBlue hover:text-white"}`}
      onMouseEnter={handleSideBarButtonHover}
      onMouseLeave={handleSideBarButtonHover}
    >
      <div className="relative aspect-square w-6">
        <img
          className={`absolute transition-all duration-300 ${isHovered || isActive ? "opacity-100" : "opacity-0"}`}
          src={iconWhite}
        />
        <img
          className={`absolute transition-all duration-300 ${isHovered || isActive ? "opacity-0" : "opacity-100"}`}
          src={iconBlack}
        />
      </div>
      <span className="text-left ml-5">{buttonText}</span>
    </button>
  );
}
