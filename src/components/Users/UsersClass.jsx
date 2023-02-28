import UsersCss from "./Users.module.css";
import React from "react";
import axios from "axios"; // or * as axios if not work
import userPhoto from "../../assets/images/alt-image.png";

class Users extends React.Component {
  Users = (props) => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
        debugger;
        props.setUsers(response.data.items);
      });
    }
  };

  render() {
    <div>
      {this.props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' className={UsersCss.image} />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(user.id);
                  }}>
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
                  }}>
                  FOLLOW
                </button>
              )}
            </div>
          </span>
          <div>{user.name}</div>
          <div>{user.id}</div>
          {/* 
          <div>{user.location.city}</div>
          <div>{user.location.country}</div> */}
        </div>
      ))}
    </div>;
  }
}

export default Users;
