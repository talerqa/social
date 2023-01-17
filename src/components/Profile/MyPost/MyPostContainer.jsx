import React from "react";
import {
  addPostActionCreate,
  onPostChangeActionCreate,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreate());
  };

  let onPostChange = (text) => {
    let action = onPostChangeActionCreate(text);
    props.store.dispatch(action);
  };

  return (
    <MyPost
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.postInfo}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostContainer;
