import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import  {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                // state={state}
                // dispatch={store.dispatch.bind(store)}
                // store={store}
            />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


serviceWorker.unregister();