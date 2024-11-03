import { h } from "preact";
import { PRODUCT } from "../../../tests/product"; // TODO: delete mock data
import { Container, Divider, Grid2, Typography } from "@mui/material";
import ProductDetailImage from "../../components/products/detail-image";
import ProductDetailDescription from "../../components/products/detail-description";
import ProductDetailActions from "../../components/products/detail-actions";

const Details = ({ id }) => {
  const product = PRODUCT;
  const handleAddToCart = (product) => {
    console.log(product, id); // TODO
  };

  return (
    <Container component="section">
      <Grid2 container spacing={{ xs: 3, md: 6 }}>
        <Grid2 item size={12}>
          <Typography variant="h5" component="h1">
            Product Details
          </Typography>
        </Grid2>

        <Grid2 item size={12}>
          <Grid2 container spacing={4} alignItems="start">
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <ProductDetailImage
                model={product.model}
                brand={product.brand}
                imgUrl={product.imgUrl}
              />
            </Grid2>

            <Grid2 item size={{ xs: 12, md: 6 }} mb={2}>
              <ProductDetailDescription product={product} />
              <Divider sx={{ my: 2 }} />
              <ProductDetailActions
                options={product.options}
                onAdd={handleAddToCart}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Details;
