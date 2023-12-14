import { useEffect, useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const validateFields = () => {
    // Check if all fields are filled
    if (!firstName || !lastName || !userName || !password || !rePassword) {
      alert("Please fill in all fields.");
      return false;
    }

    // Add additional validation logic if needed

    return true;
  };

  const handleSignup = () => {
    if (validateFields()) {
      // Perform signup logic
      alert("Signup successful!");
    }
  };

  function redirectLogin() {
    navigate('/login');
  }

  return (
    <>
      <div className="login-container">
        <h2 className="login-header">Signup</h2>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={rePassword}
          onChange={(event) => {
            setRePassword(event.target.value);
          }}
          required
        />
        <div className="mb-5">
          <button onClick={handleSignup}>Signup</button>
        </div>
        <div>
          <button onClick={redirectLogin}>Login</button>
        </div>
      </div>
    </>
  );
}
