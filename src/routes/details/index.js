import { h } from "preact";
import { useEffect } from "preact/hooks";
import { route } from "preact-router";
import { useDispatch, useSelector } from "react-redux";
import {
  ActionsSliceProducts,
  FetchersSliceProducts,
  SelectorSliceProducts,
} from "../../store/slices/products";
import { ActionsSliceCart, FetchersSliceCart } from "../../store/slices/cart";

import { Container, Divider, Grid2, Typography } from "@mui/material";
import ProductDetailImage from "../../components/products/detail-image";
import ProductDetailDescription from "../../components/products/detail-description";
import ProductDetailActions from "../../components/products/detail-actions";
import Loading from "../../components/loading";

const Details = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector(SelectorSliceProducts.productDetails);
  const loading = useSelector(SelectorSliceProducts.loading);

  const handleAddToCart = (product) => {
    if (!id || !product) return;

    const params = {
      id,
      colorCode: product.colors,
      storageCode: product.storages,
    };
    dispatch(ActionsSliceCart.setCartParams(params));
    dispatch(FetchersSliceCart.addCart(params));
    route("/");
  };

  // Fetch product details
  useEffect(() => {
    if (!id) return route("/");
    dispatch(FetchersSliceProducts.getProductDetails(id));
  }, [dispatch, id]);

  // Clean store data
  useEffect(() => {
    return () => {
      dispatch(ActionsSliceProducts.cleanProductDetails());
    };
  }, [dispatch]);

  if (loading) return <Loading />;

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
