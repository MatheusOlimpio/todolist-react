import React from "react";
import { Alert, Snackbar, Stack } from "@mui/material";

function AlertSuccess({ openMessage, message }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (openMessage) {
      setOpen(true);
    }
  }, [openMessage]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchor={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </Stack>
  );
}

export default AlertSuccess;
