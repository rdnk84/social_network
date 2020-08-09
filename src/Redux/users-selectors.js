export const getUsersSelector = (state) => {
    return state.usersPage.users;
}
//пример работы библиотеки reselect
//export const getUsersSuperSelector = createSelector (getUsersSelector,
// (users) => {
// return users.filter(u=> true);})
//те внутри зашита еще какая-то логика


export const pageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}
export const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
}
export const currentPageSelector = (state) => {
    return state.usersPage.currentPage;
}
export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}
export const followingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress;
}

