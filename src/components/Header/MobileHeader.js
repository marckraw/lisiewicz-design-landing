import React, { useState } from "react";
import { Link } from "gatsby";

import logo_poziome_tayama from "../../images/logo_poziome_tayama.svg";

// components
import MobileHeaderSubMenu from "./MobileHeaderSubMenu";

export const MobileHeader = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header --mobile">
        <div className="t-row">
          <div className="t-col">
            <Link to="/">
              <img
                className="header__logo"
                src={logo_poziome_tayama}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="t-col header__hamburger">
            <button
              onClick={toggleMenu}
              className={`t-header__menu-toggle ${isMenuOpen && "--active"}`}
              aria-label="Open menu"
            >
              <svg
                className="t-icon -animated -animated-menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g className="line1">
                  <rect
                    className="rect1"
                    y="9"
                    width="32"
                    height="3"
                    rx="1"
                    ry="1"
                  />
                </g>
                <g className="line2">
                  <rect
                    className="rect2"
                    y="20"
                    width="32"
                    height="3"
                    rx="1"
                    ry="1"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${isMenuOpen && "--active"}`}>
          <MobileHeaderSubMenu menuData={{ ...props.menuData }} />
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
