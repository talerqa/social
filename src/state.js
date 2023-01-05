let rerenderEntireTree;
let store = {
  _state: {},
  addPost() {
    let addPostInfo = {
      id: "4",
      message: state.profilePage.newPostText,
      like: "0",
    };
    state.profilePage.postInfo.push(addPostInfo);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
  },
  updateNewPostText(newText) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  },
  subscribe(observe) {
    rerenderEntireTree = observe;
  },
};

let state = {
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
  },
};

export default store;

window._store = store;

// export let addPost = () => {
//   let addPostInfo = {
//     id: "4",
//     message: state.profilePage.newPostText,
//     like: "0",
//   };
//   state.profilePage.postInfo.push(addPostInfo);
//   state.profilePage.newPostText = "";
//   rerenderEntireTree(state);
// };

// export let updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// };

// export const subscribe = (observe) => {
//   rerenderEntireTree = observe;
// };

