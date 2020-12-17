import authReducer from '../../reducers/auth';

test('should set default values', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'ahihi',
  };
  let state = authReducer((state = {}), action);
  expect(state).toEqual({
    uid: action.uid,
  });
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  let state = authReducer({ uid: 'cc' }, action);
  expect(state).toEqual({});
});
