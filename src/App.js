import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {appInitialization} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import ('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import ('./Components/Profile/ProfileContainer'))

class App extends Component {
    componentDidMount() {
        this.props.appInitialization();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render= {withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                     <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// app.PropTypes = { }
export default compose(
    withRouter,
    connect(mapStateToProps, {appInitialization}))(App);
