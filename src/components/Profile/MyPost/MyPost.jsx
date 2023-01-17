import MyPostCss from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPost = (props) => {
  let postInfos = props.posts.map((el) => (
    <Post message={el.message} like={el.like} />
  ));

  let createElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = createElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={MyPostCss.post}>
      <div>
        <textarea
          ref={createElement}
          className={MyPostCss.textarea}
          onChange={onPostChange}
          value={props.newPostText}
        />
      </div>
      <div>
        <button className={MyPostCss.btn} onClick={addPost}>
          Add post
        </button>
      </div>
      <p>MY POST:</p>
      {postInfos}
    </div>
  );
};

export default MyPost;
