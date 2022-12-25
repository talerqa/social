import React from "react";
import { NavLink } from "react-router-dom";
import DialogsCss from "./../Dialogs.module.css";

const DialogName = (props) => {
  let path = "./" + props.id;
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? DialogsCss.active + " " + DialogsCss.link
          : DialogsCss.name + " " + DialogsCss.link
      }>
      {props.name}
    </NavLink>
  );
};

export default DialogName;
