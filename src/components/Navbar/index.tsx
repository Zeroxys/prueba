import React from "react";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { navbarStyles } from "./styles";

const NavBar = ({onBack}) => {
  const styles = navbarStyles();
  
  const goToProfile = () => {
    navigate('/profile')
  }

  return (
    <nav css={styles.navbar}>
      <a href="/" className="brand-name">
        Tu informacion
      </a>
      <div css={styles.menuBars}>
        <FontAwesomeIcon 
          icon={faBars} 
          size="2x"/>
      </div>

      <div
        css={styles.navigationMenu}>
        <ul>
          <li>
            <a href="/home">Mis gustos</a>
          </li>
          <li>
            <FontAwesomeIcon 
              css={styles.profileImage} 
              onClick={goToProfile} 
              icon={faUser} 
              size="1x"/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

