import React from "react";
import { Link } from "react-router-dom";
import { DivImgRegister } from "./style.js";
import Logo from "../../assets/Logo.svg";

const HeaderRegister = () => {
  return (
    <DivImgRegister>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <Link to={`/`}>Voltar</Link>
    </DivImgRegister>
  );
};

export default HeaderRegister;
