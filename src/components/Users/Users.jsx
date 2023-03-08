import React from "react";
import userPhoto from "../../assets/images/alt-image.png";
import UsersCss from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={UsersCss.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentCount === p ? UsersCss.btnActive : UsersCss.btnNonActive}
              onClick={(e) => {
                props.onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' className={UsersCss.image} />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}>
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                     props.follow(user.id);
                    }}>
                    FOLLOW
                  </button>
                )}
              </div>
            </span>
            <div>{user.name}</div>
            <div>{user.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
