import React, { useState } from "react";
import Login from "../components/Forms/login";
import SignUp from "../components/Forms/signup";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const changeForms = () => setShowSignUp(!showSignUp);

  return (
    <main style={pageStyles}>
      {!showSignUp ? (
        <Login onBack={changeForms} />
      ) : (
        <SignUp onBack={changeForms} />
      )}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
