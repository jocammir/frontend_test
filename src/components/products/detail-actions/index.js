import { h } from "preact";
import { useState } from "preact/hooks";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  Grid2,
} from "@mui/material";
import { EMPTY_STRING } from "../../../utils/constants";

const ProductDetailActions = ({ options, onAdd }) => {
  const optionEntries = Object.entries(options);
  const defaultOptions = optionEntries.reduce(
    (acc, [key, values]) => ({ ...acc, [key]: values[0]?.code }),
    {},
  );

  const [selectedOptions, setSelectedOptions] = useState(defaultOptions);

  const handleAdd = () => {
    if (onAdd) onAdd(selectedOptions);
  };

  const handleOptionSelect = (optionType, code) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionType]: code,
    }));
  };

  return (
    <Grid2 container>
      <Grid2 item size={12}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={{ xs: "left", md: "center" }}
          gap={2}
          mb={4}
        >
          {optionEntries.map(([optionType, values]) => (
            <Box key={optionType}>
              <Typography
                color="primary"
                variant="caption"
                gutterBottom
                sx={{ textTransform: "capitalize" }}
              >
                {optionType}
              </Typography>
              <Select
                fullWidth
                value={selectedOptions[optionType] || EMPTY_STRING}
                onChange={(event) =>
                  handleOptionSelect(optionType, event.target.value)
                }
                variant="outlined"
              >
                {values.map((item) => (
                  <MenuItem key={item.code} value={item.code}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          ))}
        </Box>

        <Button onClick={handleAdd} variant="contained" fullWidth>
          Add to Cart
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default ProductDetailActions;
