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


  let createMessageElement = React.createRef();
  const sendMessage = () => {
    console.log(createMessageElement.current.value);
  }
  return (
    <div className={DialogsCss.dialogs}>
      <div className={DialogsCss.items}>
        <div className={DialogsCss.names}>{dialogNamesElement}</div>
        <div className={DialogsCss.messages}>{messagesElement}</div>
      </div>
      <div className={DialogsCss.writeMessage}>
          <textarea className={DialogsCss.textarea} ref={createMessageElement} name="" id="" cols="30" rows="10"></textarea>
          <button className={DialogsCss.button} onClick={sendMessage}>Send a message</button>
      </div>
    </div>
  );
};

export default Dialogs;
