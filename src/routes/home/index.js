import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchersSliceProducts,
  SelectorSliceProducts,
} from "../../store/slices/products";

import { Container, Grid2 } from "@mui/material";
import { filterProducts } from "../../utils/filterProducts";
import { EMPTY_STRING, GRID_SIZES } from "../../utils/constants";

import ProductListItem from "../../components/products/list-item";
import SearchField from "../../components/search-field";
import Loading from "../../components/loading";

import style from "./style.css";
import EmptyState from "../../components/empty-state";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector(SelectorSliceProducts.productList);
  const loading = useSelector(SelectorSliceProducts.loading);
  const [searchTerm, setSearchTerm] = useState(EMPTY_STRING);
  const filteredItems = filterProducts(productList, searchTerm);

  const handleCardClick = (id) => {
    route(`/details/${id}`);
  };

  // Fetch product list
  useEffect(() => {
    dispatch(FetchersSliceProducts.getProductList());
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <Container component="section" className={style.home}>
      <Grid2 container spacing={2} justifyContent="flex-end">
        <Grid2 item size={GRID_SIZES}>
          <SearchField
            id="main-search"
            label="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2}>
        {filteredItems.length ? (
          filteredItems.map((item) => (
            <Grid2 key={item.id} item size={GRID_SIZES}>
              <ProductListItem onClick={handleCardClick} {...item} />
            </Grid2>
          ))
        ) : (
          <Grid2 item size={12}>
            <EmptyState
              title="No Products Found"
              description="It seems there are no products to display at the moment. Please check back later or adjust your filters."
            />
          </Grid2>
        )}
      </Grid2>
    </Container>
  );
};

export default Home;
