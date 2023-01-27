import React from "react";
import { navigate } from "gatsby";
import Button from "../Button";
import Input from "../Input";
import { indexStyles } from "./styles";

const Login = ({onBack}) => {
  const styles = indexStyles();

  const onSubmit = () => {
    navigate('/home')
  }
  
  return (
      <div css={styles.formWrapper}>
        <div css={styles.loginForm}>
          <Input label={"Usuario"} />
          <Input label={"Contraseña"} />
          <Button 
            height={45}
            onClick={() => onSubmit()}
            text={"Ingresar"}></Button>
          <Button
            height={45}
            color={'#673299'}
            onClick={onBack} 
            text={"Registrarse"}></Button>
        </div>
      </div>
  );
};

export default Login;

export const Head = () => <title>Home Page</title>;
