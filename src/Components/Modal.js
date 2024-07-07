import ReactDom from "react-dom";
import React from "react";

const BackDrop = () => {
  return <></>;
};

const ModalOverlay = (props) => {
  return <>{props.children}</>;
};

const Modal = (props) => {
  const portalRoot = document.getElementById("portal-root");
  return (
    <>
      {ReactDom.createPortal(<BackDrop />, portalRoot)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalRoot
      )}
    </>
  );
};

export default Modal;
