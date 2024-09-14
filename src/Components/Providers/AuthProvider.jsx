import { createContext, useEffect, useState } from "react";
import app from "../Hostings/Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import useUser from "../Hooks/useUser";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    
    // console.log(loadedUser)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user?.email)

    // const loadedUser = useUser()

    //create user
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signin
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //sign in with google 
    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateCurrentProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {name:name, photoURL:photoURL})
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log('user:', currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    },[])

    const authInfo = {
        user, loading , createUser, signIn, logOut, signInWithGoogle, updateCurrentProfile
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;