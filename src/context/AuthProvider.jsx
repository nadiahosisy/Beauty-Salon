import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../config/firebaseConfig";
import { getDatabase, ref, get, set } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const db = getDatabase();

export const AuthContext = createContext();

export function useAuthGlobalContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function signup(email, password, firstName, lastName) {
    try {
      setLoading(true);
      const promise = createUserWithEmailAndPassword(auth, email, password);
      const user = await promise;

      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);

      let errorMessage = "An error occurred during signup.";

      if (error.code) {
        errorMessage = `Firebase Error (${error.code}): ${error.message}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      return { error, errorMessage };
    }
  }

  async function fetchUserDetails(userId) {
    try {
      const userRef = ref(db, "users/" + userId);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return {};
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  }

  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setCurrentUser(user);
      localStorage.setItem("userData", JSON.stringify(user));

      return user;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  async function logout() {
    try {
      await auth.signOut();
      setCurrentUser(null);
      window.localStorage.removeItem("userData");
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout,
    fetchUserDetails,
    useAuthGlobalContext,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
