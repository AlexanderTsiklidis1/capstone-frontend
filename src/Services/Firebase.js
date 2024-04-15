import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
auth.useDeviceLanguage();

// Initialize Google Auth Provider
const googleAuth = new GoogleAuthProvider();

// Initialize Analytics
const analytics = getAnalytics(app);

// Function to create or update user document in Firestore
const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        role: additionalData?.role || 'interviewee',  // Default role is 'interviewee'
    }, { merge: true });

    return userRef;
};

// Sign in with Google function
export const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuth)
        .then((result) => {
            const { user } = result;
            
        })
        .catch((error) => {
            console.error("Error during sign in with Google:", error);
        });
};

// Sign out function
export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out:", error);
    }
};
