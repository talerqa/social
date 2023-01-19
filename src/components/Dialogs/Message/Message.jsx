import React from "react";
import { NavLink } from "react-router-dom";
import DialogsCss from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <NavLink className={DialogsCss.message}>
      <div>{props.message}</div>
    </NavLink>
  );
};


export default Message;
