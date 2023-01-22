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
      return { ...state, newMessageBody: action.body };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
        newMessageBody: "",
      };
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
