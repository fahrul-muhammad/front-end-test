import React from "react";
import "./primary.scoped.css";

type Props = {
  btnText: string;
  onClick: any;
};

const PrimaryButton = (props: Props) => {
  return (
    <>
      <button
        className="
      container"
        onClick={props.onClick}
      >
        <p className="btn-text">{props.btnText}</p>
      </button>
    </>
  );
};

export default PrimaryButton;
