const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      userId: 1,
      fullName: "Alyaksei T.",
      status: "I'm fine",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
      follow: true,
      image: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
    },

    {
      userId: 2,
      fullName: "Elena T.",
      status: "I'm so good",
      location: {
        city: "Brest",
        country: "Belarus",
      },
      follow: true,
      image: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
    },

    {
      userId: 3,
      fullName: "Andrew A.",
      status: "I'm tired",
      location: {
        city: "Kiev",
        country: "Ukraine",
      },
      follow: false,
      image: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userId === action.userId) {
            return {...user, follow: true};
          }
          return user;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userId === action.userId) {
            return {...user, follow: false};
          }
          return user;
        }),
      };
    }

    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]};
    }
    default:
      return state;
  }
};

export const followActionCreate = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreate = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUserActionCreate = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
