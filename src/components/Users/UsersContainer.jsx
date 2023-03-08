import Users from "./Users";
import React from "react";
import {
  followActionCreate,
  unfollowActionCreate,
  setUserActionCreate,
  setCurrentPageActionCreate,
  setTotalUsersCountActionCreate,
} from "../../redux/users-reducer";
import axios from "axios"; // or * as axios if not work
import {connect} from "react-redux";
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentCount: state.usersPage.currentCount,
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentCount}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentCount={this.props.currentCount}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreate(userId)),
    unfollow: (userId) => dispatch(unfollowActionCreate(userId)),
    setUsers: (users) => dispatch(setUserActionCreate(users)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreate(pageNumber)),
    setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountActionCreate(totalCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
