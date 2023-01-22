import {
  addPostActionCreate,
  onPostChangeActionCreate,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postInfo,
    newPostText: state.profilePage.newPostText,
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
