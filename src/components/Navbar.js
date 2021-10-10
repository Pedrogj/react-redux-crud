import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// React-router
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to={"/"}
            sx={{ flexGrow: 1 }}
          >
            CRUD
          </Typography>
          <Button component={Link} to={"/product/new"} color="inherit">
            Add Product
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
