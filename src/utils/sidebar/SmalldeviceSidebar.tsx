import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/icons/navber_logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

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
    { to: "/admin", label: "Admin", icon: <InfoIcon /> },
    { to: "/login", label: "Login", icon: <LoginIcon /> },
    { to: "/register", label: "Register", icon: <LogoutIcon /> },
  ];

  const navlinks = (
    <ul className="flex flex-col gap-6 text-lg font-semibold">
      {navLinksData.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-2 bg-blue-500 text-white rounded relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-white before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                : "flex items-center gap-2 p-2 hover:bg-gray-200 rounded relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
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
      <MenuIcon
        fontSize="large"
        onClick={toggleModal}
        className="cursor-pointer"
      />
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeModal}
          ></div>
          <div
            className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out ${
              isClosing ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <img className="h-16" src={logo} alt="Logo" />
              <CloseIcon
                fontSize="large"
                onClick={closeModal}
                className="cursor-pointer"
              />
            </div>

            <hr className="w-full h-px bg-gray-300 my-4" />

            <nav className="overflow-y-auto max-h-full">{navlinks}</nav>
          </div>
        </>
      )}
    </>
  );
};

export default SmalldeviceSidebar;
