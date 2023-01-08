import React from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import DialogName from "./DialogName/DialogName";
import DialogsCss from "./Dialogs.module.css";
import { updateNewMessageBodyCreate, sendMessageCreate } from "./../../state";

const Dialogs = (props) => {
  let dialogNamesElement = props.dialogs.map((d) => (
    <DialogName name={d.name} id={d.id} />
  ));
  let messagesElement = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessage = props.newMessage;

  debugger;
  const onMessageClick = () => {
    props.store.dispatch(sendMessageCreate);
    console.log(props);
  };

  const onMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreate(body));
  };

  return (
    <div className={DialogsCss.dialogs}>
      <div className={DialogsCss.items}>
        <div className={DialogsCss.names}>{dialogNamesElement}</div>
        <div className={DialogsCss.messages}>{messagesElement}</div>
      </div>
      <div className={DialogsCss.writeMessage}>
        <textarea
          className={DialogsCss.textarea}
          value={newMessage}
          onChange={onMessageChange}></textarea>
        <button className={DialogsCss.button} onClick={onMessageClick}>
          Send a message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
