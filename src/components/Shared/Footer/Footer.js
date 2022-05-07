import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-2">
      <h3 className="my-3 ">
        Gadget <span className="text-success">Monkey</span>
      </h3>
      <h6>
        Be a Gadget Freak like monkey for
        <span className="text-warning mx-1">banana</span> !!
      </h6>
      <p className="my-3">
        <small>
          <FontAwesomeIcon className="mx-1 text-danger" icon={faCoffee} />
          Copyright © All rights reserved {new Date().getFullYear()}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
