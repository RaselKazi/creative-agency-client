import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

import googleIcon from '../../images/logos/gIcon.png';
import logo from '../../images/logos/logo.png';

import './Login.css';
import firebaseConfig from './firebase.config';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } }

    //Google sign-in provider
    var googleLoginProvider = new firebase.auth.GoogleAuthProvider();


    const handleGoogleLogin = () => {


        // Initialize Firebase
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        //Authenticate with Firebase using the Google provider object.
        firebase.auth().signInWithPopup(googleLoginProvider).then(function (result) {
            const { displayName, email , photoURL} = result.user;
            const signedInUser = { name: displayName, email , img: photoURL }
            setLoggedInUser(signedInUser);
            storeAuthToken();
            sessionStorage.setItem("user", email);
            sessionStorage.setItem("name", displayName);
            sessionStorage.setItem("photo", photoURL);

        }).catch(function (error) {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage);
        });

        const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                .then(function (idToken) {
                    sessionStorage.setItem('token', idToken);
                    history.replace(from);
                }).catch(function (error) {
                    // Handle error
                });
        }

    }

    return (
        <div id="login" className="app">
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo..." />
            </Link>
        </div>
        <div className="signed-in-option">
            <div className="title">
                <h3>Login With</h3>
            </div>
            <div className="d-flex flex-column align-items-center">
                <button  onClick={handleGoogleLogin}  className="sign-up-btn">
                    <span className="float-left pl-3 google-icon"><img src={googleIcon} alt="" /></span>
                    <span className="text-center mt-2 d-block">Continue with Google</span>
                </button>
            </div>
            <div className="title-footer text-center py-2">
                <p>Don't have account? <Link to="/" className="create-account">Create an account</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Login;