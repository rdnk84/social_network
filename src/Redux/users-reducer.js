import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
//pageSize -это кол-во пользователей на странице
//все св-ва (например followed: true/false и другие придут с сервера

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
};
//здесь создаем и экспортируем экшены (все названия это Action Creator-просто мы опустили это название и оставили просто SetUsers,
//setCurrentPage итд
export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollow = (isFetching, userId) => ({type: TOGGLE_FOLLOW, isFetching, userId});
//те вызов экшнкриэйтора создает action,который попадает в recucer и меняет стейт


//а здесь создаем и экспортируем thunkCreators (все названия это thunkCreator-просто мы опустили это название и оставили просто
// getUsers,setCurrentPage итд
//а уже thunkCreators диспатчат нужные экшены
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollow(true, userId));
//те когда мы диспатчим вызов экшнкриэйтора мы получается запускаем его, и создается action, к
        usersAPI.follow(userId)
            //здесь тоже все идет из api.js
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollow(false, userId))
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollow(true, userId));
        usersAPI.unfollow(userId)
            //теперь всё,что закомментировано-идет из api.js
            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
            //     withCredentials: true,
            //     headers: {
            //         "API-KEY": "be431cd4-99e3-421a-806a-cbb8bef57298"
            //     }
            // })
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollow(false, userId))
            })
    }
}
export default usersReducer;