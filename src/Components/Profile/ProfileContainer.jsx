import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
//такой путь, потому что  с сервера идет такой ответ в виде объекта,у которого будт различные св-ва,
//в числе которых св-во match  и у него еще будет св-во params - и туда мы уже вручную здесь
//приписываем значение userId,чтобы связать path(который будет также ключом св-ва match с id определенного профайла
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
// profile={this.props.profile}-вместо этой записи
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
