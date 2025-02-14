"use client";
import { useContext } from "react";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../Context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" sx={{ background: "var(--header-bg)", boxShadow:'none', marginTop:5 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <h1>Thiran</h1>             */}
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "light" ? <DarkModeIcon fontSize="large" sx={{ color: 'gray' }}/> : <LightModeIcon fontSize="large"  />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
