import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#44B",
    },
    secondary: {
      main: "#88c026",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a",
          variants: [
            {
              props: { variant: "hover" },
              style: {
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
                },
              },
            },
          ],
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "1rem",
          "&:last-child": {
            padding: "1rem",
          },
        },
      },
    },
  },
});

export default theme;
