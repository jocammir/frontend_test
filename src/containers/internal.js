import { h } from "preact";
import { Router } from "preact-router";
import { Alert, Box, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "preact/hooks";
import { FetchersSliceCart, SelectorSliceCart } from "../store/slices/cart";
import { revalidationCart } from "../store/api/cart";

import Header from "../components/header";
import Home from "../routes/home";
import Details from "../routes/details";
import NotFound from "../routes/not-found";
import { useToast } from "../hooks/useToast";
import { SelectorSliceToast } from "../store/slices/toast";

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
  const dispatch = useDispatch();
  const [routeProps, setRouteProps] = useState({});
  const cartCount = useSelector(SelectorSliceCart.cartCount);
  const toastDuration = useSelector(SelectorSliceToast.autoHideDuration);
  const horizontal = useSelector(SelectorSliceToast.horizontal);
  const vertical = useSelector(SelectorSliceToast.vertical);
  const { open, message, severity, onCloseToast } = useToast();

  const handleRouteChange = ({ current }) => {
    setRouteProps(current?.props);
  };

  // Revalidate cart store
  useEffect(() => {
    const cartParams = revalidationCart();

    if (cartParams) {
      dispatch(FetchersSliceCart.addCart(cartParams));
    }
  }, [dispatch]);

  return (
    <>
      <Header cartCount={cartCount} routeProps={routeProps} />
      <Box as="main">
        <Router onChange={handleRouteChange}>
          {ROUTES?.map(({ Component, ...routeProps }, index) => (
            <Component key={index} {...routeProps} />
          ))}
        </Router>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={toastDuration}
        anchorOrigin={{ vertical, horizontal }}
        onClose={onCloseToast}
      >
        <Alert onClose={onCloseToast} severity={severity} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default InternalContainer;
