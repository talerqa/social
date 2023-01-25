import Users from "./Users";
import {
  followActionCreate,
  unfollowActionCreate,
  setUserActionCreate,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreate(userId)),
    unfollow: (userId) => dispatch(unfollowActionCreate(userId)),
    setUsers: (users) => dispatch(setUserActionCreate(users)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
