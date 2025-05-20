import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
export const AuthContext = createContext();

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  //   register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  //   log out
  const logOut = () => {
    return signOut(auth);
  };

  // google sign in
  const googleLogIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    loading,
    setLoading,
    logIn,
    updateUser,
    googleLogIn,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
