import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
//REDUX

//redux default configurations
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';

//redux odds imports

import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.actions";


const store = configureStore({
    reducer: rootReducer,
    devTools: true, //EN PRODUCTION FALSE
})

store.dispatch(getPosts())//import
store.dispatch(getUser())//import

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById("root")
 );