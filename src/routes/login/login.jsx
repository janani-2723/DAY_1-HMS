import { useEffect, useState } from "react";
import "./login.css";
import "../../common.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // username and password
  const userName = "admin@hospital.com";
  const password = "admin@hospital";

  const navigate = useNavigate();

  const [currentUserName, setCurrentUserName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  // Encryption key
  const encryptionKey = 42; // Change this to your desired key

  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    var currentTime = new Date();
    const encryptedTimestamp = window.localStorage.getItem("isLoggedIn");
    const decryptedTimestamp = encryptedTimestamp ^ encryptionKey;

    // Compare the decrypted timestamp with the current timestamp
    if (decryptedTimestamp > Math.floor(currentTime.getTime() / 1000)) {
      navigate("/home");
    }
  });

  function updateLoginError(state) {
    setLoginError(state);
  }

  function onLogin() {
    if (currentUserName == userName && currentPassword == password) {
      // Get the current time
      var currentTime = new Date();

      // Add 8 hours to the current time
      var futureTime = new Date(currentTime.getTime() + 8 * 60 * 60 * 1000);

      // Convert the future time to a timestamp
      var timestamp = Math.floor(futureTime.getTime() / 1000);

      // Encrypt the timestamp using XOR
      var encryptedTimestamp = timestamp ^ encryptionKey;

      window.localStorage.setItem("isLoggedIn", encryptedTimestamp);
      navigate("./home");
    } else {
      updateLoginError(true);
    }
  }

  function redirectSignup() {
    navigate("/signup");
  }
  return (
    <>
    <center>
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <div className="h-24">
          {loginError && (
            <p className="text-red text-center">Invalid Credentials</p>
          )}
        </div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={currentUserName}
          onChange={(event) => {
            updateLoginError(false);
            setCurrentUserName(event.target.value);
          }}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={currentPassword}
          onChange={(event) => {
            updateLoginError(false);
            setCurrentPassword(event.target.value);
          }}
          required
        />
        <div className="mb-5">
          <button onClick={onLogin}>Login</button>
        </div>
        <div>
          <button onClick={redirectSignup}>Signup</button>
        </div>
      </div>
      </center>
    </>
  );
}
