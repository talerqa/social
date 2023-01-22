const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  dialogNames: [
    { name: "Lesha", id: "1" },
    { name: "Viktor", id: "2" },
    { name: "Misha", id: "3" },
    { name: "Lena", id: "4" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Everybody" },
    { id: 3, message: "Lets go" },
    { id: 4, message: "Fuck's it" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let stateCopy = { ...state };
      let body = stateCopy.newMessageBody;
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push({ id: 5, message: body });
      stateCopy.messages.newMessageBody = "";
      return stateCopy.messages;
    }
    default:
      return state;
  }
};

export const sendMessageCreate = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreate = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
