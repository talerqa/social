import Users from "./UsersClass";
import {followActionCreate, unfollowActionCreate, setUserActionCreate, setCurrentPageActionCreate} from "../../redux/users-reducer";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentCount: state.usersPage.currentCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreate(userId)),
    unfollow: (userId) => dispatch(unfollowActionCreate(userId)),
    setUsers: (users) => dispatch(setUserActionCreate(users)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreate(pageNumber)),

  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
