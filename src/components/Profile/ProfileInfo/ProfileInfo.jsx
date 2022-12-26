import React from "react";
import ProfileInfoCss from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
      <div className={ProfileInfoCss.avatar}>
        <img
          className={ProfileInfoCss.img}
          src="https://i.pinimg.com/736x/21/ed/6a/21ed6af9fbf3f8a33d8048e2d8e60fea.jpg"></img>
        <span className={ProfileInfoCss.name}>Lesha</span>
      </div>
  );
};

export default ProfileInfo;
