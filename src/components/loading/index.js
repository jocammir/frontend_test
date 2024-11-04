import { h } from "preact";
import { Box, Container, Grid2, Typography } from "@mui/material";

import style from "./style.css";

const Loading = () => {
  return (
    <Container component="section" className={style["loading-container"]}>
      <Grid2 container justifyContent="center">
        <Grid2 item size={12}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            fullWidth
          >
            <Box className={style.loader} />
            <Typography
              color="secondary"
              variant="caption"
              sx={{ fontSize: 14 }}
            >
              Loading
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Loading;
