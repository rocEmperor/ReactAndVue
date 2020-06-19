import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import asyncComponent from '@src/react/component/asyncComponent';
import About from '@src/react/pages/About';
import Inbox from '@src/react/pages/Inbox';
import Message from '@src/react/pages/Message';

function parseRoute (target) {
    let data = [];
    target && target.forEach((item, index) => {
        if (item.children && item.children.length) {
            item.children.forEach((child) => {
                data.push({
                    path: `${item.path}${child.path}`,
                    component: child.component
                });
            })
        } else {
            data.push({ path: item.path, component: item.component });
        }
    })
    return data;
}

// 注意，由于混合框架的特殊性，外层路由必须是/react，否则会出现404，比如下面的'demo'路由
const routeList = [
    {
        path: '/react',
        children: [
            { path: '/message', component: asyncComponent(() => import(/* webpackChunkName: 'message'*/ '@src/react/pages/Message')) },
            { path: '/about', component: About },
            { path: '/inbox', component: Inbox }
        ]
    },
    {
        path: 'demo',
        component: Inbox
    }
]

const parseRouteList = parseRoute(routeList) || [];

class RouterApp extends React.Component {
    render() {
        return (
            <Router>
                {parseRouteList.map((item, index) => {
                    return <Route path={item.path} component={item.component} key={index}/>
                })}
            </Router>
        )
    }
}

export default RouterApp;