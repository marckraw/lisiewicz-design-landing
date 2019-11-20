import React from "react";
import SbEditable from "storyblok-react";

import { resize } from "../helpers/imageService";

const ProductCard = props => {
  return (
    <SbEditable content={props.blok}>
      <div className="t-product-card">
        <div
          className="t-product-card__image"
          style={{ backgroundImage: `url(${resize(props.blok.image)})` }}
        ></div>
        {/* <img src={resize(props.blok.image)} alt="asdas" /> */}
        <div className="t-product-card__content">
          <h3 className="t-h3">{props.blok.title}</h3>
        </div>
      </div>
    </SbEditable>
  );
};

export default ProductCard;
