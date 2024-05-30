/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";

export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createNewUser = (email, password) => {
        setLoader(true)
        createUserWithEmailAndPassword(auth, email, password)
            // eslint-disable-next-line no-unused-vars
            .then((userCredential) => {
                // const Present
                const user = userCredential.user
                setLoader(false)
                toast.success("User Create SuccessFul")
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
                toast.success("Login SuccessFul")
                setLoader(false)
            })
            .catch((error) => alert(error))

    }

    const githubLogin = () => {
        setLoader(true)
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // eslint-disable-next-line no-unused-vars
                const PresentUser = result.user
                toast.success("Login SuccessFul")
                setLoader(false)
            })
            .catch((error) => alert(error))
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logout SuccessFul")
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

    const value = { user, loader, setLoader, createNewUser, loginUser, googleLogin, githubLogin, logout }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;