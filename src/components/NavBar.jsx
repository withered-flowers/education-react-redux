import React from "react";
import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {/* Karena link ini bukan dari MUI yang kita gunakan adalah style, bukan sx */}
            <Link to="/use-reducer" style={{ textDecoration: "none" }}>
              {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                useReducer
              </Button>
            </Link>

            {/* Karena link ini bukan dari MUI yang kita gunakan adalah style, bukan sx */}
            <Link to="/react-redux" style={{ textDecoration: "none" }}>
              {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                React Redux
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
