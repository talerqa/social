import React from "react";
import { NavLink } from "react-router-dom";
import DialogsCss from "./Dialogs.module.css";

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

const Message = (props) => {
  return (
    <NavLink className={DialogsCss.message}>
      <div>{props.message}</div>
    </NavLink>
  );
};

let dialogNames = [
  { name: "Lesha", id: "1" },
  { name: "Viktor", id: "2" },
  { name: "Misha", id: "3" },
  { name: "Lena", id: "4" },
];

let dialogNamesElement = dialogNames.map((d) => (
  <DialogName name={d.name} id={d.id} />
));

let messages = [
  { message: "Hello" },
  { message: "Everybody" },
  { message: "Lets go" },
  { message: "Fuck's it" },
];

let messagesElement = messages.map((m) => <Message message={m.message} />);

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className={DialogsCss.items}>
        <div className={DialogsCss.names}>{dialogNamesElement}</div>
        <div className={DialogsCss.messages}>{messagesElement}</div>
      </div>
    </div>
  );
};

export default Dialogs;
