import React from "react";
import PropTypes from "prop-types";

const FeatureProduct = ({ product }) => {
  return (
    <li className="feature-product">
      <img src={product.src} alt={product.alt} />
      <div>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
      </div>
    </li>
  );
};

FeatureProduct.propTypes = {
  product: PropTypes.object.isRequired
};

export default FeatureProduct;
