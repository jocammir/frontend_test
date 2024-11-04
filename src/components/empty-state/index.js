import { h } from "preact";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import style from "./style.css";

const EmptyState = ({ title, description }) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Card>
        <CardContent className={style.empty}>
          <CancelIcon fontSize="large" />
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          {description && (
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmptyState;
