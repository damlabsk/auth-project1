import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function ProfileSetupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Foto base64 çevirip saklayalım ki ProfilePage'de gösterelim
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("user", JSON.stringify({
          firstName,
          lastName,
          photo: reader.result
        }));
        navigate("/profile");
      };
      reader.readAsDataURL(photo);
    } else {
      localStorage.setItem("user", JSON.stringify({
        firstName,
        lastName,
        photo: null
      }));
      navigate("/profile");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#555",
              fontSize: "14px",
              textAlign: "left"
            }}
          >
            Profil Fotoğrafı Seç
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />

          <button type="submit" className="btn primary" style={{ marginTop: "1rem" }}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileSetupPage;
