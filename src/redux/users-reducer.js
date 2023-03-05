const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"; 

let initialState = {
  users: [],
  pageSize: 3,
  totalUsersCount: 10,
  currentCount:1,
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
      return {...state, users: [...action.users]};
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentCount: action.currentCount};
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

export const setCurrentPageActionCreate = (currentCount) => ({
  type: SET_CURRENT_PAGE,
  currentCount
})



export default usersReducer;
