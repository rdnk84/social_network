import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers, setCurrentPage,
    toggleFollow, unfollow
} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    currentPageSelector, followingInProgressSelector, isFetchingSelector,
    pageSizeSelector,
    totalUsersCountSelector,
    usersSelector
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

//так было пока мы не создали thunkCreator
//         this.props.toggleIsFetching(true);
//         usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
// //теперь вместо response -> data,потому что сам response сидит теперь в api.js, а здесь компонента получает только
// //нужные данные
//             this.props.toggleIsFetching(false);
//             this.props.setUsers(data.items);
//             this.props.setTotalUsersCount(data.totalCount);
//
//         });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
//         this.props.setCurrentPage(pageNumber);
//         this.props.toggleIsFetching(true);
// //pageNumber мы берем потому что State еще не обновился и актуального значения здесь еще не будет,если мы поставим
//         //this.props.currentPage
//         usersAPI.getUsers(pageNumber, this.props.pageSize)
//             .then(data => {
//                 this.props.toggleIsFetching(false);
//                 this.props.setUsers(data.items);
//             });
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
            {/*followingInProgress={this.props.followingInProgress} теперь не нужно передавать,тк это инкапсулировано*/}
            {/*в бизнес логике - в reducers           */}

        </>
    }
}


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
        users: usersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state)
    }
};

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollow, getUsers}),
    withAuthRedirect
)(UsersContainer);
//getUsers это на самом деле getUsersThunkCreator, мы переименовываем так просто для удобства чтения кода
//и тк теперь мы действуем через thunkCreator у нас отпадает необходимость в таких методах как
//setUsers, toggleIsFetching,setTotalUsersCount- тк они теперь сидят в  getUsersThunkCreator
