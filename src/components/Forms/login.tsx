import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { navigate } from "gatsby";
import Button from "../Button";
import Input from "../Input";
import { indexStyles } from "./styles";
import useUser from "../../hooks/useUser";

const Login = ({onBack}) => {
  const styles = indexStyles();
  const {userName, password} = useUser()
  const [form, setForm] = useState({})

  const notify = () => toast("Registrate antes de iniciar sesión 😁");

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = () => {
    if(userName?.length > 0 && password?.length > 0) {
      if(userName === form?.name && password === form?.password) {
        navigate('/home')
      }
    }else{
      notify()
    } 
  }
  
  return (
      <div css={styles.formWrapper}>
        <ToastContainer autoClose={2000}/>
        <div css={styles.loginForm}>
          <Input
            onChange={onChange}
            name={'name'}  
            label={"Usuario"} />
          <Input
            onChange={onChange}
            type='password'
            name={'password'}  
            label={"Contraseña"} />
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
