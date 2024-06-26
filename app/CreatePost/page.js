"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const CreatePost = () => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const [authorDisplay, setAuthorDisplay] = useState("");
  const [title, setTitle] = useState("");
  const [coverImageURL, setCoverImageURL] = useState("");
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");
  const [posterContactInfo, setPosterContactInfo] = useState("");
  const [proposedPrice, setProposedPrice] = useState("");

  useEffect(() => {
    const session = Cookies.get("username");
    if (session) {
      setUsername(session);
      setLoggedIn(true);
    }
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if (!window.hive_keychain) {
      setError("Hive Keychain is not installed");
      return;
    }
    const my_keychain = window.hive_keychain;
    // read the input values
    console.log(
      title,
      authorDisplay,
      coverImageURL,
      text,
      preview,
      proposedPrice,
      posterContactInfo
    );
    let jsondata = {
      app: "sprout/0.0.1",
      action: "create_posting",
      postingID: uuidv4(),
      authorDisplay: authorDisplay,
      title: title,
      coverImageURL: coverImageURL,
      text: text,
      preview: preview,
      posterContactInfo: posterContactInfo,
      proposedPrice: proposedPrice,
    };

    my_keychain.requestCustomJson(
      username,
      "sproutapp",
      "Active",
      JSON.stringify(jsondata),
      "Create a new post",
      (response) => {
        console.log(response);
        window.location.href = "/Listings";
      }
    );
  };

  return loggedIn ? (
    <div className="text-black h-full w-full p-4 font-poppins">
      <h1 className="text-3xl font-bold mb-4">Create a new post on sprout™</h1>
      <form className="flex flex-col gap-1" onSubmit={handlePost}>
        <label>Project Name</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="sprout"
          required
          className="w-1/6 border-b-2 outline-none p-1"
        />
        <label>Project Author</label>
        <input
          onChange={(e) => setAuthorDisplay(e.target.value)}
          type="text"
          placeholder="Author Name"
          required
          className="w-1/6 border-b-2 outline-none p-1"
        />
        <label>Short Description</label>
        <input
          type="text"
          placeholder="A project to help the environment"
          onChange={(e) => setPreview(e.target.value)}
          required
          className="w-1/6 border-b-2 outline-none p-1"
        />
        <label>Long Description</label>
        <input
          type="text"
          placeholder="A project to help the environment"
          onChange={(e) => setText(e.target.value)}
          className="w-1/6 border-b-2 outline-none p-1"
          required
        />
        <label>Project Image</label>
        <input
          onChange={(e) => setCoverImageURL(e.target.value)}
          type="url"
          required
          className="w-1/6 border-b-2 outline-none p-1"
          placeholder="enter url"
        />
        <label>Minimum Expected Quote</label>
        <input
          onChange={(e) => setProposedPrice(e.target.value)}
          type="text"
          required
          placeholder="10000"
          className="w-1/6 border-b-2 outline-none p-1"
        />
        <label>Poster contact Info</label>
        <input
          onChange={(e) => setPosterContactInfo(e.target.value)}
          type="text"
          required
          placeholder="+91XXXXXXXXXX"
          className="w-1/6 border-b-2 outline-none p-1"
        />

        <button type="submit" className="text-[90%] font-lato font-bold p-2 mt-5 border-2 border-green-900 bg-green-50 w-fit rounded-lg">
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div className="text-2xl h-full w-full p-4 font-bold mb-4 text-black"> Please <a href="/LoginPage" className="text-blue-600 hover:underline">login</a> to create a post.   </div>
  );
};

export default CreatePost;
