import React, { createContext } from "react";
import { app } from "../services/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import {
  deleteTokenLocalStorage,
  setTokenLocalStorage,
} from "../helpers/localStorage";
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [data, setData] = React.useState();

  const auth = getAuth(app);
  let history = useHistory();

  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserTokenData(userCredential.user);
        history.push("/");
      })
      .catch((error) => {
        resetUser();
        return false;
      });
  }

  const resetUser = () => {
    setData("");
    deleteTokenLocalStorage();
  };

  const setUserTokenData = (user) => {
    console.log(user);
    setData(user);
    setTokenLocalStorage(user.accessToken);
  };

  const verifyUserIsLogged = auth.onAuthStateChanged((user) => {
    if (user) {
      setData(user);
      history.push("/");
    } else {
      logout();
      history.push("/login");
      return false;
    }
  });

  const logout = () => {
    signOut(auth);
    resetUser();
  };

  React.useEffect(() => {
    verifyUserIsLogged();
  }, [verifyUserIsLogged]);

  return (
    <UserContext.Provider value={{ data, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
