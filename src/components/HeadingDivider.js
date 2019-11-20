import React from "react";

const HeadingDivider = props => (
  <div className="heading-divider" id={props.blok.anchor}>
    <h2>{props.blok.title}</h2>
  </div>
);

export default HeadingDivider;

{
  /* <HeadingDivider id="oferta">oferta</HeadingDivider> */
}
