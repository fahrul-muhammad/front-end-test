import React from "react";
import "./primary.scoped.css";

type Props = {
  btnText: string;
  onClick: any;
  href: any;
};

const PrimaryButton = (props: Props) => {
  return (
    <a
      style={{
        textDecoration: "none",
      }}
      href={props.href}
    >
      <button
        className="
      container"
        onClick={props.onClick}
      >
        {/* <p>{props.btnText}</p> */}
        <>
          <p className="btn-text">{props.btnText}</p>
        </>
      </button>
    </a>
  );
};

export default PrimaryButton;
