import React from "react";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileCss from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={ProfileCss.content}>
      <div>
        <img
          className={ProfileCss.img}
          src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg"></img>
      </div>
      <ProfileInfo />
      <MyPost posts={props.posts} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
