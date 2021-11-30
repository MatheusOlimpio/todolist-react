import React from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
function LoadingList() {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "30px",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <CircularProgress sx={{ margin: "0 20px" }} />
      <Typography variant="h5">Carregando a lista...</Typography>
    </Box>
  );
}

export default LoadingList;
