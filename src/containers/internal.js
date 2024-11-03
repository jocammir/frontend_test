import { h } from "preact";
import { Router } from "preact-router";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { SelectorSliceCart } from "../store/slices/cart";

import Header from "../components/header";
import Home from "../routes/home";
import Details from "../routes/details";
import NotFound from "../routes/not-found";

const InternalContainer = () => {
  const cart = useSelector(SelectorSliceCart.cart);

  return (
    <>
      <Header cartCount={cart.count} />
      <Box as="main">
        <Router>
          <Home path="/" />
          <Details path="/details/:id" />
          <NotFound default />
        </Router>
      </Box>
    </>
  );
};

export default InternalContainer;
