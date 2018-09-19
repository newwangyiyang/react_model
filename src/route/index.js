//配置路由 (react-router-dom)

//路由所需组件
/*
    1、Router 路由的包裹对象
    2、switch 主要目的是用来处理404的问题
    3、Route  配置路由的详细信息组件 (path, exact, component属性)
    4、redirect 用来进行重定向
*/

import React, { Component } from 'react'

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ModelPage from '../view/ModelPage/ModelPage';
import IndexPage from '../view/IndexPage/IndexPage';

class RouterConfig extends Component {
    render() {
        return (
            <Router basename='/'>
                <Switch>
                    <Route component={ModelPage} path='/ModelPage' exact />
                    <Route component={IndexPage} path='/IndexPage' exact />
                    <Redirect to='/ModelPage' />
                </Switch>
            </Router>
        )
    }
}

export default RouterConfig;

