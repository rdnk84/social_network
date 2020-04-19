import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route  path='/Dialogs'
                            render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/Profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                               addPost={props.addPost} />}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>

    );
}

export default App;
