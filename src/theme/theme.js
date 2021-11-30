import { createTheme } from "@material-ui/core/styles";
import { orange, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[600],
    },
    secondary: {
      main: grey[200],
    },
  },
});

export default theme;
