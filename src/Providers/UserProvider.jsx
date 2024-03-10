//  this PROVIDER will be responsible for reutrning the
//  functionality of our  FIREBASE SERVICE.
import React, { useEffect, useState, createContext } from "react";
import { auth } from "../Services/Firebase";

// import { db } from '../Services/Firebase';

export const addUser = async (user) => {
  await db.collection('users').add(user);
};

export const fetchUsers = async () => {
  const usersSnapshot = await db.collection('users').get();
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
};


export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>
      <div>{props.children}</div>
    </UserContext.Provider>
  );
};