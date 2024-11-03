import { h } from "preact";
import { Card, CardMedia } from "@mui/material";
import style from "./style.css";

const ProductDetailImage = ({ imgUrl, brand, model }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        className={style["card-img"]}
        image={imgUrl}
        alt={`${brand} ${model}`}
      />
    </Card>
  );
};

export default ProductDetailImage;
