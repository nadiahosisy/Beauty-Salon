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
    // try {
    //   setLoading(true);
    //   const userCredential = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   const user = userCredential.user;

    //   const userRef = ref(db, "users/" + user.uid);
    //   await set(userRef, { email, firstName, lastName });
    //   setLoading(false);
    // } catch (error) {
    //   console.error("Error during signup:", error);
    //   setLoading(false);
    //   throw error;
    // }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, firstName, lastName)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        const userRef = ref(db, "users/" + user.uid);
        set(userRef, { email, firstName, lastName });
        setLoading(false);
        // ...
      })
      .catch((error) => {
        console.error("Error during signup:", error);
        setLoading(false);
        throw error;
      });
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
      // const userDetails = await fetchUserDetails(user.uid);
      // console.log(userDetails);
      setCurrentUser(user);
      localStorage.setItem("userData", JSON.stringify(user));

      return user;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }

    // let user = null;
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     user = userCredential.email;
    //     //console.log(userCredential.user);
    //     const userDetails = fetchUserDetails(user.uid);
    //     console.log(userDetails);

    //     setCurrentUser({
    //       userCredential, // decide which one to use
    //       //userDetails,
    //     });

    //     localStorage.setItem("userData", JSON.stringify(user));
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
    // console.log(user);
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
