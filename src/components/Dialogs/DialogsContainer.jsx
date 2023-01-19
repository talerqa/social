import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageBodyCreate,
  sendMessageCreate,
} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

  let state = props.store.getState().messagePage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreate());
  };

  let onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreate(body.target.value));
  };

  return (
    <Dialogs
      updateNewMessageBodyCreate={onMessageChange}
      sendMessage={onSendMessageClick}
      messagePage={state}
    />
  );
};

export default DialogsContainer;
