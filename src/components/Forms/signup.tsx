import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { indexStyles } from "./styles";

const formWrapperSize = 60

const SignUp = ({onBack, userCreated}) => {
  const styles = indexStyles(formWrapperSize);
  const [form, setForm] = useState({})

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const createUser = () => {
    userCreated(form)
    onBack()
  }

  return (
    <div css={styles.formWrapper}>
      <div css={styles.loginForm}>
        <div css={styles.columnWrapper}>
          <div css={styles.column}>
            <Input
              onChange={onChange}
              name={'name'} 
              label={"Nombre"} />
            <Input 
              onChange={onChange}
              name={'secondSurname'}
              label={"Apellido Materno"} />
            <Input
              onChange={onChange}
              name={'phone'} 
              label={"Telefono"} />
            <Input
              onChange={onChange}
              name={'userName'}
              label={"Usuario"} />
          </div>
          <div css={styles.column}>
            <Input
              onChange={onChange}
              name={'firstSurname'} 
              label={"Apellido Paterno"} />
            <Input
              onChange={onChange}
              name={'birthday'} 
              label={"Fecha Nacimiento"} />
            <Input
              onChange={onChange}
              name={'genre'} 
              label={"Genero"} />
            <Input
              onChange={onChange}
              type="password"
              name={'password'} 
              label={"Contraseña"} />
          </div>
        </div>
        <div>
          <Button 
            onClick={createUser}
            height={45}
            text={"Registrarse"} />
          <Button
            height={45}
            color={'#673299'}
            onClick={onBack} 
            text={"Volver"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

