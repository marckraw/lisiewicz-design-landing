import React from "react";

import { firstMenu, secondMenu } from "../mocked-data/navigationItems";

const tags = [
  { id: 0, name: "święta", slug: "swieta" },
  { id: 1, name: "oświetlenie_led", slug: "oswietlenie_led" },
  { id: 2, name: "nowości", slug: "nowosci" },
  { id: 3, name: "vidos", slug: "vidos" }
];

const onlineShop = [
  {
    id: 0,
    name: "cctv telewizja przemysłowa",
    slug: "cctv_telewizja_przemyslowa"
  },
  { id: 1, name: "kontrola dostępu", slug: "kontrola_dostepu" },
  { id: 2, name: "led", slug: "led" },
  { id: 3, name: "zasilacze i przetwornice", slug: "zasilacze_i_przetwornice" }
];

const Footer = () => (
  <footer className="footer">
    <div className="section">
      <div className="t-row">
        <div className="t-col -s-12 -l-4">
          <div className="footer__nav">
            <h2>nawigacja</h2>
            <div>
              <ul className="t-list">
                {firstMenu.map(item => (
                  <li className="t-list__item" key={item.value}>
                    <a className="t-link" href="/#">
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="t-list">
                {secondMenu.map(item => (
                  <li className="t-list__item" key={item.value}>
                    <a className="t-link" href="/#">
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="t-col -s-12 -l-4">
          <div className="footer__shop">
            <h2>sklep internetowy</h2>
            <ul className="t-list">
              {onlineShop.map(item => (
                <li className="t-list__item" key={item.name}>
                  <a className="t-link" href="/#">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__tags">
            <h2>tagi na stronie</h2>
            <ul className="t-list">
              {tags.map(tag => (
                <li className="t-list__item" key={tag.name}>
                  <a className="t-link" href="/#">
                    #{tag.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="t-col -s-12 -l-4">
          <div className="footer__contact">
            <div className="footer__contact--description">
              <h2>kontakt</h2>
              <p>
                TAYAMA Spółka z ograniczoną odpowiedzialnością spółka
                komandytowa
              </p>
            </div>
            <div className="footer__contact--adres">
              Adres: ul. Słoneczna 4 40-135 Katowice
            </div>
          </div>
        </div>
      </div>
      <div className="footer__line">
        Wszelkie prawa zastrzeżone, TAYAMA spółka z ograniczoną
        odpowiedzialnością sp. k. © 2019
      </div>
    </div>
  </footer>
);

export default Footer;
