import { h } from "preact";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import style from "./style.css";

const ProductListItem = ({
  id,
  brand,
  model,
  price,
  imgUrl,
  onAdd,
  onClick,
}) => {
  const handleAddToCart = (event) => {
    event.stopPropagation();
    if (onAdd) onAdd(event);
  };

  return (
    <Card className={style.card} variant="hover" onClick={() => onClick(id)}>
      <CardMedia
        component="img"
        className={style["card-img"]}
        image={imgUrl}
        title={model}
      />
      <CardContent>
        <Typography color="primary" variant="caption" sx={{ fontSize: 14 }}>
          {brand}
        </Typography>
        <Typography variant="h6">{model}</Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          sx={{
            color: price ? "text.primary" : "text.disabled",
            fontWeight: "bold",
          }}
        >
          {price ? `$ ${price}` : "Sold Out!"}
        </Typography>
      </CardContent>
      {onAdd && (
        <CardActions>
          <Button fullWidth size="small" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ProductListItem;
