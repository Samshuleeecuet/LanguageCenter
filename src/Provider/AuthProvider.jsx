import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUserwithEmail = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInwithEmail = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginwithGoogle = () =>{
        setLoading(true);
        signInWithPopup(auth, GoogleProvider)
        .then(result=>{
            const user = result.user;
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: true
              })
            window.location.href= 'http://localhost:5173/'
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const updateUserProfile = (user,name,photourl)=>{
        updateProfile(user,{
            displayName:name, photoURL: photourl
        })
        .then(()=>{
            console.log('profile updated')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const logOut = () =>{
        signOut(auth)
        .then()
        .catch()
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
           // console.log(loggedUser)
            setUser(loggedUser)
            setLoading(false)
            //console.log(loggedUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])



    const AuthInfo = {
        user,
        createUserwithEmail,
        signInwithEmail,
        updateUserProfile,
        logOut,
        loginwithGoogle,
        loading
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;