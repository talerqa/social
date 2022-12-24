import MyPostCss from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";

let postInfo = [
  { message: "Hi, what's up", like: "15" },
  { message: "How old are you", like: "20" },
  { message: "I'm great", like: "6" },
];

let postInfos = postInfo.map((el) => (
  <Post message={el.message} like={el.like} />
));
const MyPost = () => {
  return (
    <div className={MyPostCss.post}>
      <p>MY POST:</p>
      {postInfos}
    </div>
  );
};

export default MyPost;
