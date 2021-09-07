import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../router";

const AppRouter = () => {
    const isAuth = false;

    return (
        isAuth
        ?
        <Switch>
            {privateRoutes.map(route =>
            <Route path={route.path} exact={route.exact} component={route.component} key={route.path }/>)}
            <Redirect to={RouteNames.EVENT}/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route =>
            <Route path={route.path} exact={route.exact} component={route.component} key={route.path }/>)}
            <Redirect to={RouteNames.LOGIN}/>
        </Switch>

    );
};

export default AppRouter;