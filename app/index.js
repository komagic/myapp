//引入react,react-dom
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider }from "react-redux";
// 引入React-Router模块
import { HashRouter, Router, Route, hashHistory,Link } from 'react-router-dom'

import store from "./store/store";
//引入自定义组件
import Home from './pages/home';


// 配置路由 (Provider 是一个react组件，提供一个全局的store使得所有的组件都可以使用)
render((
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </HashRouter>
    </Provider>
),document.getElementById('content'));

if (module.hot) {
    module.hot.accept();
}
