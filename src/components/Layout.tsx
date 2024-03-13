import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            CRUD Mascotas
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>
              <Link to="/pets/list">Lista de Mascotas</Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link to="/pets/create">Agregar Mascota</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ pt: 15 }}>{children}</Container>
    </>
  );
};

export default Layout;
