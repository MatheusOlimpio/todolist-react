import { SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function SideBar({ open, setOpen }) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Box sx={{ width: "250px" }}></Box>
    </SwipeableDrawer>
  );
}

export default SideBar;
