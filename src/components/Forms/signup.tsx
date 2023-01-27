import * as React from "react";
import Button from "../Button";
import Input from "../Input";
import { indexStyles } from "./styles";

const formWrapperSize = 60

const SignUp = ({onBack}) => {
  const styles = indexStyles(formWrapperSize);
  return (
    <div css={styles.formWrapper}>
      <div css={styles.loginForm}>
        <div css={styles.columnWrapper}>
          <div css={styles.column}>
            <Input
              name={'name'} 
              label={"Nombre"} />
            <Input 
              name={'secondSurname'}
              label={"Apellido Materno"} />
            <Input
              name={'phone'} 
              label={"Telefono"} />
            <Input label={"Usuario"} />
          </div>
          <div css={styles.column}>
            <Input
              name={'firstSurname'} 
              label={"Apellido Paterno"} />
            <Input
              name={'birthday'} 
              label={"Fecha Nacimiento"} />
            <Input
              name={'genre'} 
              label={"Genero"} />
            <Input
              type="password"
              name={'password'} 
              label={"Contraseña"} />
          </div>
        </div>
        <div>
          <Button 
            height={45}
            text={"Alta"} />
          <Button
            height={45}
            color={'#673299'}
            onClick={onBack} 
            text={"Login"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

