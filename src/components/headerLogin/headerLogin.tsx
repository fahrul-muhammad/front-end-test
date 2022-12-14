import React from "react";
import "./headerLogin.scoped.css";
import { PrimaryButton } from "../button";

type Props = {
  name: string;
};

const Header = (props: Props) => {
  return (
    <>
      <div
        className="
      container"
      >
        <p className="header-title">Cinta Coding</p>
        {/* <p className="post">POST</p> */}
        <p className="header-name">
          Welcome, <span className="name">{props.name}</span>
        </p>
      </div>
    </>
  );
};

export default Header;
