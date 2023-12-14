import { useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Encryption key
  const encryptionKey = 42; // Change this to your desired key

  useEffect(() => {
    var currentTime = new Date();
    const encryptedTimestamp = window.localStorage.getItem("isLoggedIn");
    const decryptedTimestamp = encryptedTimestamp ^ encryptionKey;

    // Compare the decrypted timestamp with the current timestamp
    if (decryptedTimestamp < Math.floor(currentTime.getTime() / 1000)) {
      navigate("/login");
    }
  });

  function signout() {
    window.localStorage.removeItem('isLoggedIn');
    navigate('')
  }

  return (
    <>
      <div className="h-100dvh w-100dwh">
        <div className="h-20dvh">
          <button className="float-right" onClick={signout}>Sign Out</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <center><h1 className="hello">Welcome</h1></center>
        </div>
        <div></div>
      </div>
    </>
  );
}
