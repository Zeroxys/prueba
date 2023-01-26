import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Table from "../Table";
import { profileStyles } from "./styles";

const ProfileComponent = () => {
  const styles = profileStyles()
  return (
      <Table 
        border={false} 
        tableWidth={60}>
        <div css={styles.profileHeader}>
          <FontAwesomeIcon icon={faUser} size="2x"/>
          <h3>user name</h3>
        </div>
        <Table 
          border 
          tableWidth={50}>
          <div>
            <p>Mi Informacion</p>
          </div>
          <div>
            <p>nombre</p>
            <p>sexo</p>
            <p>edad</p>
          </div>
        </Table>
      </Table>
  );
};

export default ProfileComponent;

