import Container from "@mui/material/Container";
import MainRoutes from "./routes/routes.js";
import PageHeader from "./_common/components/PageHeader/PageHeader.js";
import { UserContextProvider } from "./_common/context/UserContext.js";

function App() {
  return (
    <UserContextProvider>
      <PageHeader />
      <Container
        sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        <MainRoutes></MainRoutes>
      </Container>
    </UserContextProvider>
  );
}

export default App;
