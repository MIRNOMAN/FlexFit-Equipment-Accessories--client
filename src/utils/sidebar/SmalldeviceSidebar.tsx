import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/icons/navber_logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const SmalldeviceSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCloseing, setIsCloseing] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closeModal = () => {
    setIsCloseing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsCloseing(false);
    }, 300);
  };

  const navlinks = (
    <ul className=" gap-8  text-lg font-semibold">
      <li>
        <NavLink to="/">
          <HomeIcon /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products">
          <ShoppingBagIcon /> Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutus">
          {" "}
          <InfoIcon /> About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          {" "}
          <LoginIcon /> Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register">
          <LogoutIcon /> Register
        </NavLink>
      </li>
    </ul>
  );

  return (
    <>
      <MenuIcon fontSize="large" onClick={openModal} />
      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModal}></div>
          <div
            className={`cartmodel_small p-6 overflow-y-f text-primary ${
              isCloseing ? "closing" : ""
            }`}
          >
            <div className="">
              <div className="flex flex-col text-black   mx-auto  lg:py-0">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="h-16" src={logo} alt="" />
                  </div>
                  <div>
                    <CloseIcon fontSize="large" />
                  </div>
                </div>

                <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>

                <h4 className=" p-5 border ">{navlinks}</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SmalldeviceSidebar;
