"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";


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
    <div className="h-full w-full p-4 text-black font-poppins">

      <img src='/banner.png' alt='banner' className='pb-5' />

      {loggedIn ? (
        <div>
          <p className="font-extrabold text-[3vw]">Welcome, {username}!</p>
          < button onClick={handleLogout} className="text-[90%] font-lato font-bold py-2 px-5 border-2 border-green-900 bg-green-50 w-fit rounded-lg">Logout</button>
        </div>
      ) : (
        <div>
          <p className="font-extrabold text-[3vw]">Login to Sprout</p>
          <form action={() => { }}>
            <input
              type="text"
              placeholder="Enter Hive username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="outline-none border-2 border-green-900 rounded-lg p-2 w-1/5 my-2"
            /> <br />
            <button onClick={handleLogin} className="text-[90%] font-lato font-bold py-2 px-5 border-2 border-green-900 bg-green-50 w-fit rounded-lg" type="submit">Login</button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
