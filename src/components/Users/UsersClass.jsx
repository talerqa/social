import UsersCss from "./Users.module.css";
import React from "react";
import axios from "axios"; // or * as axios if not work
import userPhoto from "../../assets/images/alt-image.png";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return <span className={this.props.currentCount == p ? UsersCss.btnActive : UsersCss.btnNonActive}>{p}</span>;
          })}
        </div>
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
