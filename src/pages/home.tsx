import React from "react";
import MusicComponent from "../components/MusicTable";
import NavBar from "../components/Navbar";

const HomePage = () => {
  return (
    <main>
      <NavBar/>
      <MusicComponent/>
    </main>
  );
};

export default HomePage;

