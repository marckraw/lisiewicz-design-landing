import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import debounce from "lodash/debounce";

// data
import { firstMenu, secondMenu } from "../../mocked-data/navigationItems";

// components
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

// constans
import { breakpoints } from "../../utils/constants";

const Header = props => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const deviceWidth = window.innerWidth;
    checkIfIsMobile(deviceWidth);
  }, []);

  useEffect(() => {
    const handleResize = event => {
      const deviceWidth = event.target.innerWidth;
      checkIfIsMobile(deviceWidth);
    };

    window.addEventListener("resize", debounce(handleResize, 100));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const checkIfIsMobile = deviceWidth => {
    if (deviceWidth <= breakpoints.l) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  console.log("header page props: ", props);

  return isMobile ? (
    <MobileHeader
      pageContext={1}
      menuData={{
        firstMenu,
        secondMenu
      }}
      scrollToTop={scrollToTop}
    />
  ) : (
    <DesktopHeader
      pageContext={props.pageContext}
      menuData={{
        firstMenu,
        secondMenu
      }}
      scrollToTop={scrollToTop}
    />
  );
};

export default Header;
