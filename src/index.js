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

//а раньше было так
// let renderEntireTree = (state) => {
//
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//             <App
//                 // state={state}
//                 // dispatch={store.dispatch.bind(store)}
//                 // store={store}
//                 />
//             </Provider>
//         </BrowserRouter>, document.getElementById('root')
//     );
// };

// renderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState()
//     renderEntireTree();
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();