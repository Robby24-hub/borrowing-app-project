import {
  HouseIcon,
  BoxesIcon,
  HandHelpingIcon,
  UsersRoundIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";
import SideBarButton from "./SIdeBarButton";
import { NavLink } from "react-router";

export default function SideBar() {
  const navLinkItems = [
    {
      id: crypto.randomUUID(),
      text: "Home",
      icon: HouseIcon,
      path: "/",
    },
    {
      id: crypto.randomUUID(),
      text: "Inventory",
      icon: BoxesIcon,
      path: "/inventory",
    },
    {
      id: crypto.randomUUID(),
      text: "Borrow",
      icon: HandHelpingIcon,
      path: "/borrow",
    },
    {
      id: crypto.randomUUID(),
      text: "People",
      icon: UsersRoundIcon,
      path: "/people",
    },
    {
      id: crypto.randomUUID(),
      text: "Settings",
      icon: SettingsIcon,
      path: "/settings",
    },
  ];

  return (
    <div className="fixed h-[calc(100vh-76px)] mt-19  w-50 flex flex-col justify-between py-5 px-3 bg-grayishWhite">
      <div className="">
        {navLinkItems.map((navLinkItem) => {
          console.log(navLinkItem.id);
          return (
            <NavLink key={navLinkItem.id} to={navLinkItem.path}>
              {({ isActive }) => (
                <SideBarButton
                  buttonText={navLinkItem.text}
                  icon={navLinkItem.icon}
                  isActive={isActive}
                />
              )}
            </NavLink>
          );
        })}
      </div>
      <div>
        <SideBarButton buttonText={"Log Out"} icon={LogOutIcon} />
      </div>
    </div>
  );
}
