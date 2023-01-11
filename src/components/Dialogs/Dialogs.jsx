import React from "react";
import Message from "./Message/Message";
import DialogName from "./DialogName/DialogName";
import DialogsCss from "./Dialogs.module.css";
import { updateNewMessageBodyCreate, sendMessageCreate } from "./../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().messagePage;

  let dialogNamesElement = state.dialogNames.map((d) => (
    <DialogName name={d.name} id={d.id} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreate());
  };

  let onMessageChange = (e) => {
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
        <div>
          <textarea
            placeholder="Enter text"
            className={DialogsCss.textarea}
            value={newMessageBody}
            onChange={onMessageChange}></textarea>
        </div>
        <div>
          <button className={DialogsCss.button} onClick={onSendMessageClick}>
            Send a message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
