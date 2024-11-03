import { h } from "preact";
import { useState } from "preact/hooks";
import { route } from "preact-router";
import { Container, Grid2 } from "@mui/material";
import { filterProducts } from "../../utils/filterProducts";
import { EMPTY_STRING, GRID_SIZES } from "../../utils/constants";
import ProductListItem from "../../components/products/list-item";
import SearchField from "../../components/search-field";

import { PRODUCTS } from "../../../tests/products"; //TODO: delete mock data
import style from "./style.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(EMPTY_STRING);
  const filteredItems = filterProducts(PRODUCTS, searchTerm);

  const handleCardClick = (id) => {
    route(`/details/${id}`);
  };

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
        {filteredItems.map((item) => (
          <Grid2 key={item.id} item size={GRID_SIZES}>
            <ProductListItem onClick={handleCardClick} {...item} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Home;
