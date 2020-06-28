import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer
                           // store={props.store}-потому что теперь мы Store берем из контекста. через Context provider-consumer
                           // profilePage={props.state.profilePage} dispatch={props.dispatch}
                       />}/>
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/login'
                       render={() => <LoginPage/>}/>
            </div>
        </div>

    );
}

// app.PropTypes = { }
export default App;
