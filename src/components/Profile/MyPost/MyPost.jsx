import MyPostCss from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPost = (props) => {
  let postInfos = props.posts.map((el) => (
    <Post message={el.message} like={el.like} />
  ));

  return (
    <div className={MyPostCss.post}>
      <p>MY POST:</p>
      {postInfos}
    </div>
  );
};

export default MyPost;
