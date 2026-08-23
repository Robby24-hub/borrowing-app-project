import homeIcon from "/images/house.png";
import inventoryIcon from "/images/boxes.png";
import borrowIcon from "/images/hand-helping.png";
import peopleIcon from "/images/users-round.png";
import settingsIcon from "/images/settings.png";
import logoutIcon from "/images/log-out.png";

import SideBarButton from "./SIdeBarButton";
import { NavLink } from "react-router";

export default function SideBar() {
  return (
    <div className="h-full w-1/7 flex flex-col justify-between py-5 px-3 bg-[#23393f] border-r-2 border-[#0d1920]">
      <div className="">
        <NavLink to="/">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"Home"}
              icon={homeIcon}
              isActive={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/inventory">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"Invetory"}
              icon={inventoryIcon}
              isActive={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/borrow">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"Borrow"}
              icon={borrowIcon}
              isActive={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/people">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"People"}
              icon={peopleIcon}
              isActive={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/settings">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"Settings"}
              icon={settingsIcon}
              isActive={isActive}
            />
          )}
        </NavLink>
      </div>
      <div>
        <SideBarButton buttonText={"Log Out"} icon={logoutIcon} />
      </div>
    </div>
  );
}
