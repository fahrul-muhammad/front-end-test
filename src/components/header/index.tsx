import React from "react";
import "./index.scoped.css";
import { PrimaryButton } from "../button";

const Header = () => {
  return (
    <>
      <div
        className="
      container"
      >
        <p className="header-title">Cinta Coding</p>
        <div className="btn-container">
          <PrimaryButton btnText="Login" onClick={undefined} href="/login" />
        </div>
      </div>
    </>
  );
};

export default Header;
