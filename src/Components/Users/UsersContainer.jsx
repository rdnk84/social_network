import React from 'react';
import {connect} from 'react-redux';
import {
    follow, requestUsers, setCurrentPage,
    toggleFollow, unfollow} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    currentPageSelector, followingInProgressSelector, getUsersSelector, isFetchingSelector,
    pageSizeSelector, totalUsersCountSelector, usersSelector
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollow={this.props.toggleFollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

//до селекторов
// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state)
    }
};

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollow, requestUsers}),
    withAuthRedirect
)(UsersContainer);
