import { h } from "preact";
import { useState } from "preact/hooks";
import { Typography, Button, Divider, Grid2 } from "@mui/material";
import { PRODUCT_CONFIGS } from "../../../utils/constants";

const ProductDetailDescription = ({ product }) => {
  const [showAll, setShowAll] = useState(false);

  const { excludedKeys, limit, separator } = PRODUCT_CONFIGS.DETAILS;
  const productDetails = Object.entries(product).filter(
    ([key]) => !excludedKeys.includes(key),
  );

  const visibleDetails = showAll
    ? productDetails
    : productDetails.slice(0, limit);

  return (
    <Grid2 container>
      <Grid2 item size={12}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {product.brand} {product.model}
        </Typography>
        <Typography variant="h6" color="primary" fontWeight="bold">
          Precio: ${product.price}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Grid2 container spacing={1}>
          {visibleDetails.map(([key, value]) => (
            <Grid2 item size={12} key={key}>
              <Grid2 container>
                <Grid2 item size={{ xs: 12, md: 4 }}>
                  <Typography
                    fontWeight="bold"
                    textTransform="capitalize"
                    variant="body2"
                  >
                    {key}
                  </Typography>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 8 }}>
                  <Typography variant="body2">
                    {Array.isArray(value)
                      ? value.join(separator)
                      : value || "N/A"}
                  </Typography>
                </Grid2>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>

        <Button
          variant="text"
          color="secondary"
          sx={{ mt: 2, p: 0 }}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Ver menos" : "Ver más"}
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default ProductDetailDescription;
