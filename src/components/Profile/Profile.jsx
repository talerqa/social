import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileCss from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
  return (
    <div className={ProfileCss.content}>
      <div>
        <img
          className={ProfileCss.img}
          src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg"></img>
      </div>
      <ProfileInfo />
      <MyPostContainer store={props.store} />
    </div>
  );
};

export default Profile;
