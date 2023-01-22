const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  postInfo: [
    { id: "1", message: "Hi, what's up", like: "15" },
    { id: "2", message: "How old are you", like: "20" },
    { id: "3", message: "I'm great", like: "6" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let addPostInfo = {
        id: "4",
        message: state.newPostText,
        like: "0",
      };
      let stateCopy = { ...state };
      stateCopy.postInfo = [...state.postInfo];
      stateCopy.postInfo.push(addPostInfo);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreate = () => ({ type: ADD_POST });
export const onPostChangeActionCreate = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
