import React from "react";
import Message from "./Message/Message";
import DialogName from "./DialogName/DialogName";
import DialogsCss from "./Dialogs.module.css";

const Dialogs = (props) => {
 
  let state = props.messagePage;

  let dialogNamesElement = state.dialogNames.map((d) => (
    <DialogName name={d.name} id={d.id} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let createElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onMessageChange = (body) => {
    props.updateNewMessageBodyCreate(body.target.value);
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
            ref={createElement}
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
