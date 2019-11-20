import React from "react";
import { resize } from "../helpers/imageService";

const Image = props => {
  return (
    <figure>
      <img src={resize(props.blok.image)} alt={props.blok.alt} />
      <figcaption>{props.blok.caption}</figcaption>
    </figure>
  );
};

export default Image;
