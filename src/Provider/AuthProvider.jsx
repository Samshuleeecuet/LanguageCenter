import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import Swal from 'sweetalert2';
import axios from 'axios';
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
        return signInWithPopup(auth, GoogleProvider)
        
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
            //get and set token by AXIOS
            if(loggedUser){
                axios.post('http://localhost:5000/jwt',{email: loggedUser.email})
                .then(data=> {
                    const token = data.data.token;
                    localStorage.setItem('access-token',token)
                })
            }else{
                localStorage.removeItem('access-token')
            }
            

            setLoading(false)
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