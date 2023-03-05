import UsersCss from "./Users.module.css";
import React from "react";
import axios from "axios"; // or * as axios if not work
import userPhoto from "../../assets/images/alt-image.png";

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      debugger;
      props.setUsers(response.data.items);
    });

    // props.setUsers([
    //   {
    //     userId: 1,
    //     fullName: "Alyaksei T.",
    //     status: "I'm fine",
    //     location: {
    //       city: "Minsk",
    //       country: "Belarus",
    //     },
    //     follow: true,
    //     image: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
    //   },

    //   {
    //     userId: 2,
    //     fullName: "Elena T.",
    //     status: "I'm so good",
    //     location: {
    //       city: "Brest",
    //       country: "Belarus",
    //     },
    //     follow: true,
    //     image: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
    //   },

    //   {
    //     userId: 3,
    //     fullName: "Andrew A.",
    //     status: "I'm tired",
    //     location: {
    //       city: "Kiev",
    //       country: "Ukraine",
    //     },
    //     follow: false,
    //     image: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
    //   },
    // ]);
  }

  return (
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
          {/* 
          <div>{user.location.city}</div>
          <div>{user.location.country}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Users;
