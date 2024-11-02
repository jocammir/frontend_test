import { h } from "preact";
import { Container, Typography } from "@mui/material";

const NotFound = () => (
  <Container component="section">
    <Typography variant="h3" component="h1">
      404 - Página no encontrada
    </Typography>
    <Typography>Lo sentimos, la página que buscas no existe.</Typography>
  </Container>
);

export default NotFound;
