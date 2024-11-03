import { h } from "preact";
import { Link } from "preact-router/match";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import style from "./style.css";

const Header = ({ cartCount }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Link href="/">
        <img
          src="../../assets/logo-inverse.svg"
          alt="Store Logo"
          className={style.img}
          height="32"
          width="32"
          loading="lazy"
        />
      </Link>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Mobi Store
      </Typography>
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
        href="https://github.com/jocammir/frontend_test.git"
      >
        <GitHubIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
