import React, { useState } from "react";
import Login from "../components/Forms/login";
import SignUp from "../components/Forms/signup";
import UserContext from "../context/userContext";
import 'react-toastify/dist/ReactToastify.css';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState({})

  const changeForms = () => setShowSignUp(!showSignUp);
  const userCreated = (user) => setUser(user)

  return (
    <UserContext.Provider value={user}>
      <main style={pageStyles}>
        {!showSignUp ? (
          <Login onBack={changeForms} />
        ) : (
          <SignUp
            userCreated={(user) => userCreated(user)} 
            onBack={changeForms} />
        )}
      </main>
    </UserContext.Provider>

  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
