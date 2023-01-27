import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Table from "../Table";
import { profileStyles } from "./styles";
import Button from "../Button";
import useUser from "../../hooks/useUser";

const ProfileComponent = () => {
  const styles = profileStyles()
  const {name, genre} = useUser()
  return (
      <Table 
        border={false} 
        tableWidth={60}>
        <div css={styles.profileHeader}>
          <div css={styles.profileNameContainer}>
            <FontAwesomeIcon icon={faUser} size="2x"/>
            <h3>Hola ! {name}</h3>
          </div>
          <div css={styles.buttonContainer}>
            <Button
              marginBottom={'0'}
              color='red' 
              text='Eliminar usuario'/>
          </div>
        </div>
        <Table 
          border 
          tableWidth={50}>
          <div>
            <p>Mi Informacion</p>
          </div>
          <div>
            <p>{name}</p>
            <p>{genre}</p>
          </div>
        </Table>
      </Table>
  );
};

export default ProfileComponent;

