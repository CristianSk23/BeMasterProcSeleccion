import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navArrayLinks = [
    {
      title: "Inicio",
      path: "/home",
      icon: <HomeIcon color="secondary" />,
    },
    {
      title: "Salir",
      path: "/",
      icon: <LogoutIcon color="secondary" />,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ReproPlay
          </Typography>
          {navArrayLinks.map((item, index) => (
            <Button key={index} color="inherit" component={Link} to={item.path}>
              {item.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
