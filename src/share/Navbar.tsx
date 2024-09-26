import logo from "../assets/icons/navber_logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../pages/Login";
import SmalldeviceSidebar from "../utils/sidebar/SmalldeviceSidebar";

const Navbar = () => {
  const navlinks = (
    <ul
      className="flex gap-8 text-lg font-semibold"
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/aboutus">About Us</NavLink>
      </li>
    </ul>
  );

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop view */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="h-20" src={logo} alt="logo" />
          </Typography>

          {/* Mobile view menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                display: { xs: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img className="h-20" src={logo} alt="logo" />
            </Typography>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* Use your hamburger icon here, e.g., <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navlinks}
            </Menu>
          </Box>

          {/* Links and Login button for desktop view */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {navlinks}
            <Login />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginRight: "20px",
            }}
          >
            <PersonOutlineIcon sx={{ fontSize: "30px" }} />
            <SearchIcon sx={{ fontSize: "30px" }} />
            <button className="py-4 px-1 relative border-2 border-transparent  rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
              <ShoppingCartIcon sx={{ fontSize: "30px" }} />
              <span className="absolute inset-0 object-right-top -mr-6">
                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  6
                </div>
              </span>
            </button>
          </Box>

          {/* User Avatar and Menu */}

          <Box sx={{ flexGrow: 0, display: { xs: "block", md: "none" } }}>
            <Tooltip title="Open settings">
              <IconButton>
                <SmalldeviceSidebar />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
