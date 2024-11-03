import { h } from "preact";
import { Router } from "preact-router";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "preact/hooks";
import { SelectorSliceCart } from "../store/slices/cart";

import Header from "../components/header";
import Home from "../routes/home";
import Details from "../routes/details";
import NotFound from "../routes/not-found";

const ROUTES = [
  {
    name: "Home",
    path: "/",
    Component: Home,
    crumbs: [{ title: "Home", active: true }],
  },
  {
    name: "Details",
    path: "/details/:id",
    Component: Details,
    crumbs: [
      { title: "Home", url: "/" },
      { title: "Details", active: true },
    ],
  },
  {
    name: "NotFound",
    default: true,
    Component: NotFound,
    crumbs: [
      { title: "Home", url: "/" },
      { title: "Not Found", active: true },
    ],
  },
];

const InternalContainer = () => {
  const [routeProps, setRouteProps] = useState({});
  const cart = useSelector(SelectorSliceCart.cart);

  const handleRouteChange = ({ current }) => {
    setRouteProps(current?.props);
  };

  return (
    <>
      <Header cartCount={cart.count} routeProps={routeProps} />
      <Box as="main">
        <Router onChange={handleRouteChange}>
          {ROUTES?.map(({ Component, ...routeProps }, index) => (
            <Component key={index} {...routeProps} />
          ))}
        </Router>
      </Box>
    </>
  );
};

export default InternalContainer;
