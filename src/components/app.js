import { h } from "preact";
import { Router } from "preact-router";
import { Box, ThemeProvider } from "@mui/material";

import Header from "./header";
import Home from "../routes/home";
import Details from "../routes/details";
import theme from "../style/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Box id="app">
      <Header />
      <main>
        <Router>
          <Home path="/" />
          <Details path="/details/:id" />
        </Router>
      </main>
    </Box>
  </ThemeProvider>
);

export default App;
