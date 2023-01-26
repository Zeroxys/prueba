import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { navbarStyles } from "./styles";

const NavBar = ({onBack}) => {
  const styles = navbarStyles();
  
  return (
    <nav css={styles.navbar}>
      <a href="/" className="brand-name">
        Tu informacion
      </a>
      <FontAwesomeIcon css={styles.menuBars} icon={faBars} size="2x"/>
      <div
        css={styles.navigationMenu}>
        <ul>
          <li>
            <a href="/home">Mis gustos</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} size="1x"/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

