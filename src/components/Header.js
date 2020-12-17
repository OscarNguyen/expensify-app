import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
export const Header = (props) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">
      <p>Login Page</p>
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      <p>Create Expense</p>
    </NavLink>

    <NavLink to="/help" activeClassName="is-active">
      <p>Help</p>
    </NavLink>
    <NavLink to="/dashboard" activeClassName="is-active">
      <p>Dashboard Page</p>
    </NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});
export default connect(undefined, mapDispatchToProps)(Header);
