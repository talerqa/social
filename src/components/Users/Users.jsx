import UsersCss from "./Users.module.css";
import React from "react";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.userId}>
          <span>
            <div>
              <img src={user.image} alt='' className={UsersCss.image} />
            </div>
            <div>
              {user.follow ? (
                <button
                  onClick={() => {
                    props.unfollow(user.userId);
                  }}>
                  unfollow
                </button> 
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.userId);
                  }}>
                  follow
                </button>
              )}
            </div>
          </span>
          <div>{user.fullName}</div>
          <div>{user.status}</div>
          <div>{user.location.city}</div>
          <div>{user.location.country}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
