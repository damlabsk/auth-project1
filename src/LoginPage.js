import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider, linkedinProvider, microsoftProvider } from "./firebase";
import "./LoginPage.css";

function LoginPage() {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("Google Kullanıcı:", user);
        alert(`Hoşgeldin ${user.displayName}`);
      })
      .catch((error) => console.error("Google Hata:", error));
  };
  // Microsoft
const handleMicrosoftSignIn = () => {
  signInWithPopup(auth, microsoftProvider)
    .then((result) => {
      const user = result.user;
      console.log("Microsoft User:", user);
      // burada profile page'e yönlendirme yapabilirsin
              alert(`Hoşgeldin ${user.displayName}`);
    })
    .catch((error) => {
      console.error("Microsoft Login Error:", error);
    });
};

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log("GitHub Kullanıcı:", user);
        alert(`Hoşgeldin ${user.displayName}`);
      })
      .catch((error) => console.error("GitHub Hata:", error));
  };

  const handleLinkedInSignIn = () => {
    signInWithPopup(auth, linkedinProvider)
      .then((result) => {
        const user = result.user;
        console.log("LinkedIn Kullanıcı:", user);
        alert(`Hoşgeldin ${user.displayName}`);
      })
      .catch((error) => console.error("LinkedIn Hata:", error));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Log In</h2>

        <button className="btn google" onClick={handleGoogleSignIn}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
          Log in with Google
        </button>

        <button className="btn microsoft" onClick={handleMicrosoftSignIn}>
        <img src="https://img.icons8.com/color/48/000000/microsoft.png" alt="Microsoft" />
          Log in with Microsoft
        </button>

        <button className="btn github" onClick={handleGithubSignIn}>
          <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" />
          Log in with GitHub
        </button>

        <button className="btn linkedin" onClick={handleLinkedInSignIn}>
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
          Log in with LinkedIn
        </button>

        <div className="divider">Or</div>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="btn primary">Log In</button>

        <p>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
