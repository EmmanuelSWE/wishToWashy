import { createAction } from 'redux-actions';
import { IAuthStateContext, IUser } from './context';

export enum AuthActionEnums {
  registerPending = 'REGISTER_PENDING',
  registerSuccess = 'REGISTER_SUCCESS',
  registerError = 'REGISTER_ERROR',
  loginPending = 'LOGIN_PENDING',
  loginSuccess = 'LOGIN_SUCCESS',
  loginError = 'LOGIN_ERROR',
  logout = 'LOGOUT',
}

//Register actions
export const registerPending = createAction(AuthActionEnums.registerPending, () => ({ isPending: true, isSuccess: false, isError: false }));
export const registerError = createAction(AuthActionEnums.registerError, () => ({ isError: true, isPending: false, isSuccess: false }));
export const registerSuccess = createAction<IAuthStateContext, IUser>(AuthActionEnums.registerSuccess, (user: IUser) => ({
  isSuccess: true,
  isPending: false,
  isError: false,
  user,
}));

//Login actions
export const loginPending = createAction(AuthActionEnums.loginPending, () => ({ isPending: true, isSuccess: false, isError: false }));
export const loginError = createAction(AuthActionEnums.loginError, () => ({ isError: true, isPending: false, isSuccess: false }));
export const loginSuccess = createAction<IAuthStateContext, IUser>(AuthActionEnums.loginSuccess, (user: IUser) => ({
  isSuccess: true,
  isPending: false,
  isError: false,
  user,
}));

//Logout
export const logoutAction = createAction(AuthActionEnums.logout, () => ({ isSuccess: false, user: undefined }));
