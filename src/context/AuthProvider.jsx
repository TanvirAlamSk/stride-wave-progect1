/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app)
export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createNewUser = (email, password) => {
        setLoader(true)
        createUserWithEmailAndPassword(auth, email, password)
            // eslint-disable-next-line no-unused-vars
            .then((userCredential) => {
                // const PresentUser = userCredential.user
                alert("User Create SuccessFul")
            }).catch((error) => alert(error))
    }

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoader(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // eslint-disable-next-line no-unused-vars
                const PresentUser = result.user
                alert("Login SuccessFul")
            })
            .alert((error) => alert(error))

    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                alert("Logout SuccessFul")
            })
            .catch((error) => alert(error))
    }

    useEffect(() => {
        const unSubscriber = () => {
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoader(false)
            })
        }
        return () => unSubscriber()
    }, [])

    const value = { user, loader, createNewUser, loginUser, googleLogin, logout }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;