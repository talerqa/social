import {
  addPostActionCreate,
  onPostChangeActionCreate,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";

const mapStateToProps = (store) => {
  return {
    posts: store.profilePage.postInfo,
    newPostText: store.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreate()),
    updateNewPostText: (text) => {
      dispatch(onPostChangeActionCreate(text));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
