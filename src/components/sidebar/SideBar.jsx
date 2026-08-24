import homeIconWhite from "/images/house.png";
import inventoryIconWhite from "/images/boxes.png";
import borrowIconWhite from "/images/hand-helping.png";
import peopleIconWhite from "/images/users-round.png";
import settingsIconWhite from "/images/settings.png";
import logoutIconWhite from "/images/log-out.png";
import homeIconBlack from "/images/house-black.png";
import inventoryIconBlack from "/images/boxes-black.png";
import borrowIconBlack from "/images/hand-helping-black.png";
import peopleIconBlack from "/images/users-round-black.png";
import settingsIconBlack from "/images/settings-black.png";
import logoutIconBlack from "/images/log-out-black.png";
import SideBarButton from "./SIdeBarButton";
import { NavLink } from "react-router";

export default function SideBar() {
  return (
    <div className="fixed h-[calc(100vh-76px)] mt-19  w-50 flex flex-col justify-between py-5 px-3 bg-[#dfe5ec]">
      <div className="">
        <NavLink to="/">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"Home"}
              iconWhite={homeIconWhite}
              iconBlack={homeIconBlack}
              isActive={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/inventory">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"Invetory"}
              iconWhite={inventoryIconWhite}
              iconBlack={inventoryIconBlack}
              isActive={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/borrow">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"Borrow"}
              iconWhite={borrowIconWhite}
              iconBlack={borrowIconBlack}
              isActive={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/people">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"People"}
              iconWhite={peopleIconWhite}
              iconBlack={peopleIconBlack}
              isActive={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/settings">
          {({ isActive }) => (
            <SideBarButton
              buttonText={"Settings"}
              iconWhite={settingsIconWhite}
              iconBlack={settingsIconBlack}
              isActive={isActive}
            />
          )}
        </NavLink>
      </div>
      <div>
        <SideBarButton
          buttonText={"Log Out"}
          iconWhite={logoutIconWhite}
          iconBlack={logoutIconBlack}
        />
      </div>
    </div>
  );
}
