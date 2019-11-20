import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useStaticQuery, graphql } from "gatsby";

import Search from "../Search";

import logo_poziome_tayama from "../../images/logo_poziome_tayama.svg";

const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`;

export const DesktopHeader = props => {
  const data = useStaticQuery(query);

  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <img
            className="header-desktop__logo"
            src={logo_poziome_tayama}
            alt="Logo"
          />
        </Link>
        <Search searchIndex={data.siteSearchIndex.index} />
      </div>
      <div className="header__first-menu">
        <nav>
          <ul className="header__nav-ul">
            {props.menuData.firstMenu.map(item => (
              <li className="header__nav-item --first-menu" key={item.id}>
                {props.pageContext.story &&
                props.pageContext.story.slug === "subpage" ? (
                  <ScrollLink
                    activeClass="active"
                    to={item.section || "whatever"}
                    spy={true}
                    smooth={true}
                    offset={-159}
                    duration={500}
                  >
                    {item.value}
                  </ScrollLink>
                ) : (
                  <Link to="/subpage">{item.value}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header__second-menu">
        <a
          className="header__online-shop-link"
          href="https://sklep.tayama.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          sklep online
        </a>
        <nav>
          <ul className="header__nav-ul">
            {props.menuData.secondMenu.map(item => (
              <li className="header__nav-item --second-menu" key={item.id}>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DesktopHeader;
