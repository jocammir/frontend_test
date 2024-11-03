import { h } from "preact";
import { Router } from "preact-router";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./style/theme";

import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/header";
import Home from "./routes/home";
import Details from "./routes/details";
import NotFound from "./routes/not-found";

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Box id="app">
        <Header />
        <Box as="main">
          <Router>
            <Home path="/" />
            <Details path="/details/:id" />
            <NotFound default />
          </Router>
        </Box>
      </Box>
    </Provider>
  </ThemeProvider>
);

export default App;
