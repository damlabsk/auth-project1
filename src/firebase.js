import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADhWJGUeaNkTWOJ9rV_iCzc9ERXXjpcw0",
  authDomain: "auth-f44c7.firebaseapp.com",
  projectId: "auth-f44c7",
  storageBucket: "auth-f44c7.firebasestorage.app",
  messagingSenderId: "918123460775",
  appId: "1:918123460775:web:1ed32284527723a8064382",
};

// Firebase başlat
const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);

// Provider'lar
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const linkedinProvider = new OAuthProvider("oidc.auth-linkedin"); // LinkedIn OIDC
