import React, { createContext, useEffect, useState } from 'react';
import { auth, db } from '../Services/Firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    const userDetails = {
                        email: user.email,
                        displayName: userData.displayName,
                        photoURL: user.photoURL,
                        uid: user.uid,
                        role: userData.role
                    };
                    localStorage.setItem('user', JSON.stringify(userDetails));
                    setCurrentUser(userDetails);
                } else {
                    console.log("No such user document!");
                    setCurrentUser(null);  // Ensure state is clear if no document is found
                }
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
