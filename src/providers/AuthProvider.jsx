import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

export const AuthContext = createContext(null);


const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const authInfo = {
        // user,
        loading,
        createUser,
        // signIn,
        // logOut
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;