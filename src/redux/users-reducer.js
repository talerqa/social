const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 15,
  currentCount: 2,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
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
