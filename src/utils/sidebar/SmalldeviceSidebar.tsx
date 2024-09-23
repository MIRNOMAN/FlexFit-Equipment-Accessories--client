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
  const [isClosing, setIsClosing] = useState(false);

  const toggleModal = () => {
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closeModal = () => {
    setIsClosing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };
  const navLinksData = [
    { to: "/", label: "Home", icon: <HomeIcon /> },
    { to: "/products", label: "Products", icon: <ShoppingBagIcon /> },
    { to: "/aboutus", label: "About Us", icon: <InfoIcon /> },
    { to: "/login", label: "Login", icon: <LoginIcon /> },
    { to: "/register", label: "Register", icon: <LogoutIcon /> },
  ];

  const navlinks = (
    <ul className="text-left gap-8 text-lg font-semibold">
      {navLinksData.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "block  gap-2 p-2 bg-blue-500 text-white rounded"
                : "block  gap-2 p-2 hover:bg-gray-200 rounded"
            }
          >
            {link.icon} {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <MenuIcon fontSize="large" onClick={toggleModal} />
      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModal}></div>
          <div
            className={`cartmodel_small p-6 overflow-y-f text-primary ${
              isClosing ? "closing" : ""
            }`}
          >
            <div className="">
              <div className="flex flex-col text-black   mx-auto  lg:py-0">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="h-16" src={logo} alt="" />
                  </div>
                  <div>
                    <CloseIcon fontSize="large" onClick={closeModal} />
                  </div>
                </div>

                <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>

                <h4>{navlinks}</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SmalldeviceSidebar;
