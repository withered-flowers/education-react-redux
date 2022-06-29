import React from "react";
import "./App.css";

import NavBar from "./components/NavBar.jsx";

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function App() {
  return (
    <div>
      <NavBar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </div>
  );
}
