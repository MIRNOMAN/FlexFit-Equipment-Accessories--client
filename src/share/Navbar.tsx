import logo from "../assets/icons/navber_logo.png";

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
import SmalldeviceSidebar from "../utils/sidebar/SmalldeviceSidebar";
import Cart from "../pages/Cart";

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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          Admin
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          Login
        </NavLink>
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
            <div className="lg:block hidden">
              <img
                className="lg:w-10 lg:h-10 lg:rounded-full"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </div>

            <Cart></Cart>
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
