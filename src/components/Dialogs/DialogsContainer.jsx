import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageBodyCreate,
  sendMessageCreate,
} from "../../redux/dialogs-reducer";
import storeContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreate());
        };

        let onMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreate(body));
        };
        return (
          <Dialogs
            updateNewMessageBodyCreate={onMessageChange}
            sendMessage={onSendMessageClick}
            messagePage={store.getState().messagePage}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default DialogsContainer;
