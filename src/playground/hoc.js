//HOC - a component (hoc) renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin ? <p>This is private info. Plz don't share</p> : undefined}
      <WrappedComponent {...props} />
    </div>
  )
}
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please sign in</p>}
    </div>
  )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
/* ReactDOM.render(<AdminInfo isAdmin={false} info='these are the details' />, document.getElementById('app'));*/
ReactDOM.render(<AuthInfo isAuthenticated={true} info='these are the details' />, document.getElementById('app'));