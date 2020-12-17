import { Switch, BrowserRouter, Route, Link, NavLink, Router } from 'react-router-dom';
import React, { useState } from 'react';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
export const history = createHistory();

const AppRouter = () => {
  /*   const [isLogin, setIsLogin] = useState(false);
  const onHandleLogin = () => {
    setIsLogin(true);
  }; */
  return (
    <div>
      {/*   {isLogin ? ( */}
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
      {/*  ) : (
      <LoginPage /> */}
      {/*  )} */}
    </div>
  );
};

export default AppRouter;
