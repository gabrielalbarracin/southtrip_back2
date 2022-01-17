import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import HomeView from '../views/HomeViews';
import LoginView from '../views/LoginView';
import PublicRoute from './helperRoutes'


const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exac path='/login' componen={LoginView} />
            <PublicRoute exac path="/" componen={HomeView}/>
            <Redirect path='/**' to='/'/>
        </Switch>
    )
}

export default PublicRoutes;