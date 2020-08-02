import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/bootstrap.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPShhXQiOrTNYoIGspZOiCCGmk43_ZnDE",
    authDomain: "it-biz-52ebe.firebaseapp.com",
    databaseURL: "https://it-biz-52ebe.firebaseio.com",
    projectId: "it-biz-52ebe",
    storageBucket: "it-biz-52ebe.appspot.com",
    messagingSenderId: "505711306300",
    appId: "1:505711306300:web:2b40bc46a508aee8b28539",
    measurementId: "G-J1MHB0T10C",
};

const rrfConfig = {
    userProfile: "users",
    attachAuthIsReady: true,
    firebaseStateName: "firebase",
    useFirestoreForProfile: true,
};

const store = createStore(rootReducer, applyMiddleware(thunk));

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfProps = {
    firebase,
    config: rrfConfig,
    createFirestoreInstance,
    dispatch: store.dispatch,
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
