import { h } from "preact";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./style/theme";

import { Provider } from "react-redux";
import store from "./store/store";

import InternalContainer from "./containers/internal";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Box id="app">
          <InternalContainer />
        </Box>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
