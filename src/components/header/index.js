import { h } from "preact";
import { Link } from "preact-router/match";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Breadcrumb from "../breadcrumb";

import style from "./style.css";

const Header = ({ cartCount, routeProps }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Link href="/">
        <Box display="flex" alignItems="center">
          <img
            src="../../assets/logo-inverse.svg"
            alt="Store Logo"
            className={style.img}
            height="32"
            width="32"
            loading="lazy"
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mobi Store
          </Typography>
        </Box>
      </Link>
      <Box display="flex" alignItems="center" ml="auto">
        <IconButton
          aria-label="cart"
          size="large"
          edge="start"
          color="inherit"
          title="Cart"
        >
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="Github project"
          title="Github project"
          sx={{ ml: 2 }}
          href={process.env.PREACT_APP_GITHUB_URL}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Toolbar>
    <Toolbar variant="breadcrumb">
      <Breadcrumb {...routeProps} />
    </Toolbar>
  </AppBar>
);

export default Header;
