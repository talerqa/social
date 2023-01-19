import React from "react";
import {
  addPostActionCreate,
  onPostChangeActionCreate,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import storeContext from "../../../StoreContext";

const MyPostContainer = () => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreate());
        };

        let onPostChange = (text) => {
          let action = onPostChangeActionCreate(text);
          store.dispatch(action);
        };
        return (
          <MyPost
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.postInfo}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default MyPostContainer;
