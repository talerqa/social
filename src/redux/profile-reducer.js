const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let addPostInfo = {
        id: "4",
        message: state.newPostText,
        like: "0",
      };
      state.postInfo.push(addPostInfo);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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
