import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  Grid2,
} from "@mui/material";
import { EMPTY_STRING } from "../../../utils/constants";

const ProductDetailActions = ({ options = {}, onAdd }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleAdd = () => {
    if (onAdd) onAdd(selectedOptions);
  };

  const handleOptionSelect = (optionType, code) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionType]: code,
    }));
  };

  // Set default options
  useEffect(() => {
    setSelectedOptions(
      Object.entries(options).reduce(
        (acc, [key, values]) => ({ ...acc, [key]: values[0]?.code }),
        {},
      ),
    );
  }, [options]);

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
          {Object.entries(options).map(([optionType, values]) => (
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
