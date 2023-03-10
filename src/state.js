import profileReducer from "./redux/profile-reducer";
import dialogsReducer from "./redux/dialogs-reducer";

let rerenderEntireTree;
let store = {
  _state: {
    profilePage: {
      postInfo: [
        { id: "1", message: "Hi, what's up", like: "15" },
        { id: "2", message: "How old are you", like: "20" },
        { id: "3", message: "I'm great", like: "6" },
      ],
      newPostText: "",
    },
    messagePage: {
      dialogNames: [
        { name: "Lesha", id: "1" },
        { name: "Viktor", id: "2" },
        { name: "Misha", id: "3" },
        { name: "Lena", id: "4" },
      ],
      messages: [
        { message: "Hello" },
        { message: "Everybody" },
        { message: "Lets go" },
        { message: "Fuck's it" },
      ],
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  addPost() {
    let addPostInfo = {
      id: "4",
      message: this._state.profilePage.newPostText,
      like: "0",
    };
    this._state.profilePage.postInfo.push(addPostInfo);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  _callSubscriber() {
    console.log("State changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);

    this._rerenderEntireTree(this._state);
  },

  subscribe(observe) {
    this._rerenderEntireTree = observe;
  },
};

export default store;

window._store = store;
