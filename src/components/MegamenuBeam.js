import React from "react";
import PropTypes from "prop-types";

import FeatureProduct from "./FeatureProduct";

const MegamenuBeam = ({ featuredProducts, links }) => {
  return (
    <div className="megamenu">
      <ul className="megamenu__links">
        {links.map(link => (
          <li key={link.content}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.content}
            </a>
          </li>
        ))}
      </ul>
      <ul className="megamenu__feature-products">
        {featuredProducts.map(product => (
          <FeatureProduct key={product.alt} product={product} />
        ))}
      </ul>
    </div>
  );
};

MegamenuBeam.propTypes = {
  featuredProducts: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired
};

export default MegamenuBeam;
