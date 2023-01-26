import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser
} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../components/Navbar";
import Table from "../components/Table";
import ProfileComponent from "../components/Profile";

const HomePage = () => {
  return (
    <main>
      <NavBar/>
      <ProfileComponent/>
    </main>
  );
};

export default HomePage;

