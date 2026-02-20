import { handleActions } from 'redux-actions';
import { IAuthStateContext, INITIAL_STATE } from './context';
import { AuthActionEnums } from './actions';

export const AuthReducer = handleActions<IAuthStateContext, any>(
  {
    [AuthActionEnums.registerPending]: (state, action) => ({ ...state, ...action.payload }),
    [AuthActionEnums.registerSuccess]: (state, action) => ({ ...state, ...action.payload }),
    [AuthActionEnums.registerError]: (state, action) => ({ ...state, ...action.payload }),

    [AuthActionEnums.loginPending]: (state, action) => ({ ...state, ...action.payload }),
    [AuthActionEnums.loginSuccess]: (state, action) => ({ ...state, ...action.payload }),
    [AuthActionEnums.loginError]: (state, action) => ({ ...state, ...action.payload }),

    [AuthActionEnums.logout]: (state, action) => ({ ...state, ...action.payload }),
  },
  INITIAL_STATE
);
