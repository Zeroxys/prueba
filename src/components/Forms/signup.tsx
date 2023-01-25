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
            <Input label={"Nombre"} />
            <Input label={"Apellido Materno"} />
            <Input label={"Telefono"} />
            <Input label={"Usuario"} />
          </div>
          <div css={styles.column}>
            <Input label={"Apellido Paterno"} />
            <Input label={"Fecha Nacimiento"} />
            <Input label={"Genero"} />
            <Input label={"Contraseña"} />
          </div>
        </div>
        <div>
          <Button text={"Alta"}></Button>
          <Button
            color={'#673299'}
            onClick={onBack} 
            text={"Login"}></Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

