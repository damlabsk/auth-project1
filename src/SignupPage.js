import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider, linkedinProvider } from "./firebase";
import "./LoginPage.css";

function SignupPage() {
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("Google Kullanıcı:", result.user);
        navigate("/profile-setup");
      })
      .catch((error) => console.error("Google Hata:", error));
  };

  const handleGithubSignUp = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("GitHub Kullanıcı:", result.user);
        navigate("/profile-setup");
      })
      .catch((error) => console.error("GitHub Hata:", error));
  };

  const handleLinkedInSignUp = () => {
    signInWithPopup(auth, linkedinProvider)
      .then((result) => {
        console.log("LinkedIn Kullanıcı:", result.user);
        navigate("/profile-setup");
      })
      .catch((error) => console.error("LinkedIn Hata:", error));
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    // Buraya email + password signup işlemi eklenecek
    console.log("Email signup formu gönderildi");
    navigate("/profile-setup");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign Up</h2>

        {/* Google */}
        <button className="btn google" onClick={handleGoogleSignUp}>
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Sign up with Google
        </button>

        {/* Microsoft (pasif) */}
        <button className="btn microsoft" disabled>
          <img
            src="https://img.icons8.com/color/48/000000/microsoft.png"
            alt="Microsoft"
          />
          Sign up with Microsoft (Coming soon)
        </button>

        {/* GitHub */}
        <button className="btn github" onClick={handleGithubSignUp}>
          <img
            src="https://img.icons8.com/material-outlined/48/000000/github.png"
            alt="GitHub"
          />
          Sign up with GitHub
        </button>

        {/* LinkedIn */}
        <button className="btn linkedin" onClick={handleLinkedInSignUp}>
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
          />
          Sign up with LinkedIn
        </button>

        <div className="divider">Or</div>

        <form onSubmit={handleEmailSignUp}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn primary">Sign Up</button>
        </form>

        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
