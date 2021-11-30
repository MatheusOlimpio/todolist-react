import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import UserContext from "../../context/UserContext";
import SideBar from "../SideBar/SideBar";

function PageHeader() {
  const { data, logout } = React.useContext(UserContext);
  const [openMenu, setOpenMenu] = React.useState(false);
  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          {data ? (
            <>
              <Typography>{data.email}</Typography>
              <Button color="inherit" onClick={logout}>
                Sair
              </Button>
            </>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
      <SideBar open={openMenu} setOpen={setOpenMenu}></SideBar>
    </Box>
  );
}

export default PageHeader;
