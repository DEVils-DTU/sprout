"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const session = Cookies.get("username");
    if (session) {
      setUsername(session);
      setLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    if (!window.hive_keychain) {
      setError("Hive Keychain is not installed");
      return;
    }
    const my_keychain = window.hive_keychain;
    my_keychain.requestSignBuffer(
      username,
      "Sprout sign-in with Hive Keychain",
      "Posting",
      (response) => {
        if (response.success) {
          setLoggedIn(true);
          setError(null);
          setUsername(username);
          Cookies.set("username", username);
          //   var sesh = "session";
          //   var cookieval = account;
          //   document.cookie = sesh + "=" + cookieval + "; path=/";
          //   window.location.reload();
        }
      }
    );
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    Cookies.remove("username");
  };

  return (
    <div className="h-full w-full p-4 text-black">
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter Hive username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
