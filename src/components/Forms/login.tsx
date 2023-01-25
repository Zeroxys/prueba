import * as React from "react";
import Button from "../Button";
import Input from "../Input";
import { indexStyles } from "./styles";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Login = ({onBack}) => {
  const styles = indexStyles();
  return (
    <main style={pageStyles}>
      <div css={styles.formWrapper}>
        <div css={styles.loginForm}>
          <Input label={"Usuario"} />
          <Input label={"Contraseña"} />
          <Button text={"Ingresar"}></Button>
          <Button
            color={'#673299'}
            onClick={onBack} 
            text={"Registrarse"}></Button>
        </div>
      </div>
    </main>
  );
};

export default Login;

export const Head = () => <title>Home Page</title>;
