import * as React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Input />
      <Button text={"Ingresar"}></Button>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
