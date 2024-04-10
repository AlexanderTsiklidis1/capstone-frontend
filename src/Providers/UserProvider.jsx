import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Services/Firebase'; // Ensure this import matches your file structure
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, displayName, photoURL, uid } = user;
                const userDetails = { email, displayName, photoURL, uid };
                localStorage.setItem('user', JSON.stringify(userDetails));
                setCurrentUser(userDetails);
            } else {
                localStorage.removeItem('user');
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={currentUser}>
            {children}
        </UserContext.Provider>
    );
};
