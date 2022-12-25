import React from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import DialogName from "./DialogName/DialogName";
import DialogsCss from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogNamesElement = props.dialogs.map((d) => (
    <DialogName name={d.name} id={d.id} />
  ));
  let messagesElement = props.messages.map((m) => <Message message={m.message} />);
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
