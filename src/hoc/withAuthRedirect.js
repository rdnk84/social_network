import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect  = (state) => ({
    isAuth: state.auth.isAuth
})
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
 //здесь isAuth эта компонента берет из mapDispatchToProps из connect для конкретной контейнерной компоненты
            return <Component {...this.props}/>;
        }
    }
    let ConnectedAuthRedirect = connect (mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirect;
}