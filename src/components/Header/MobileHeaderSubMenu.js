import React, { useState, useEffect } from "react";

import { cloudinaryTayamaTestSvgsFolderUrl } from "../../utils/constants";

const MobileHeaderSubMenu = props => {
  const [activeId, setActiveId] = useState(1);
  const [filteredItem, setFilteredItem] = useState(null);

  useEffect(() => {
    const dupa = props.menuData.secondMenu.filter(item => item.id === activeId);
    setFilteredItem(dupa[0]);
  }, [activeId, props.menuData.secondMenu]);

  const chooseItem = id => {
    setActiveId(id);
  };

  return (
    <>
      <div className="mobile-menu__content t-row" style={{ overflow: "auto" }}>
        {props.menuData.secondMenu.map(singleItem => {
          return (
            <div
              className={`t-col mobile-menu__item ${singleItem.id ===
                activeId && "--active"}`}
              key={singleItem.id}
              onClick={() => chooseItem(singleItem.id)}
            >
              <img
                src={`${cloudinaryTayamaTestSvgsFolderUrl}/led_full-color_cdq4hj.svg`}
                alt=""
              />
              <h3>{singleItem.value}</h3>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="t-row item__content">
        {activeId &&
          filteredItem &&
          filteredItem.featuredProducts.map(product => (
            <div className="t-col" key={product.src}>
              <img src={product.src} alt={product.alt} />
            </div>
          ))}
      </div>
    </>
  );
};

export default MobileHeaderSubMenu;
