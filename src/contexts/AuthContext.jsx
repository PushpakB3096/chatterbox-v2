import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

// creates a context for anything related to auth
const AuthContext = createContext();

// custom hook
export const useAuth = () => useContext(AuthContext);

// auth provider component
export const AuthProvider = ({ children }) => {
  // holds whether our app is loading or not
  const [loading, setLoading] = useState(true);
  // holds the current logged in user
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(
    () => {
      // whenever the user's auth status changes, calls the handler and sets the user state accordingly.
      auth.onAuthStateChanged(user => {
        // gets the logged in user and sets it to the state's user
        setUser(user);
        // stop the loading
        setLoading(false);
        // navigate to chats page
        history.push("/chats");
      });
    },
    // whenever the user logs in or when we renavigate
    [user, history]
  );

  // value for context
  const value = {
    user
  };

  return (
    <AuthContext.Provider value={value}>
      {/* render the children component whenever we are not loading */}
      {!loading && children}
    </AuthContext.Provider>
  );
};
