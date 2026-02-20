import { useReducer, useContext } from 'react';
import { AuthReducer } from './reducer';
import { AuthStateContext, AuthActionContext, INITIAL_STATE, IUser } from './context';
import { registerPending, registerSuccess, registerError, loginPending, loginSuccess, loginError, logoutAction } from './actions';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const register = async (email: string, username: string, password: string, type: string) => {
    dispatch(registerPending());
    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);

        //Create the firebase doc we will store our user in
        const userDoc = doc(db, type, newUser.user.uid);
        const localUser = {
            email: newUser.user.email,
            username,
            uid: newUser.user.uid,
            createdAt: new Date(),
        };

        await setDoc(userDoc, localUser);
        const user: IUser = { id: newUser.user.uid, email, username };
        dispatch(registerSuccess(user));
    } catch (error) {
      console.error(error);
      dispatch(registerError());
    }
  };


  //@Lethabo, you can refactor this to your liking since it was ur task
  //Currently, its assumed that all users are landlords
  const login = async (email: string, password: string) => {
    dispatch(loginPending());
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user: IUser = { id: userCredential.user.uid, email, username: 'Landlord' };
      dispatch(loginSuccess(user));
    } catch (error) {
      console.error(error);
      dispatch(loginError());
    }
  };

  const logout = () => {
    signOut(auth);
    dispatch(logoutAction());
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionContext.Provider value={{ register, login, logout }}>
        {children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) throw new Error('useAuthState must be used within AuthProvider');
  return context;
};

export const useAuthActions = () => {
  const context = useContext(AuthActionContext);
  if (!context) throw new Error('useAuthActions must be used within AuthProvider');
  return context;
};
