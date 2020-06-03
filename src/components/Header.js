import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' exact={true} activeClassName='is-active'><p>Dashboard</p></NavLink>
    <NavLink to='/create' activeClassName='is-active'><p>Create Expense</p></NavLink>

    <NavLink to='/help' activeClassName='is-active'><p>Help</p></NavLink>
  </header>
)

export default Header;