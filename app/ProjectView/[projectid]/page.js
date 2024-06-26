"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const ProjectView = ({ params }) => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [postingData, setPostingData] = useState([]);
  const [offers, setOffers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const session = Cookies.get("username");
    if (session) {
      setUsername(session);
      setLoggedIn(true);
    }
    fetch(`/api/postings/${params.projectid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // data has the fields postingID, author, authorDisplay, title, coverImageURL, text, preview, posterContactInfo, proposedPrice, status
        setPostingData(data);
        // fetch offers
        fetch(`/api/offers/${params.projectid}`)
          .then((res) => res.json())
          .then((offerData) => {
            console.log(offerData);
            setOffers(offerData);
            setLoading(false);
          });
      });
  }, []);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex h-full justify-evenly items-center w-full p-10">
      <img src={postingData.coverImageURL} className="w-2/5" />
      <div className="text-black w-3/5 h-full font-poppins p-5 flex flex-col justify-start gap-5">

        <h1 className=" font-extrabold text-[3vw] underline">
          {postingData.title}
        </h1>
        <h2 className=" text-[1vw] italic">
          By {postingData.authorDisplay} <br />
        </h2>

        <div className="flex text-justify justify-evenly w-full">
          <p className="py-5">
            {postingData.text} <br />{" "}
          </p>
        </div>

        {loggedIn ? (
          username != postingData.author ? (
            // true ? (
            <div className="flex flex-col gap-2 w-full h-full items-start justify-start">
              <h2 className="font-bold text-2xl">Place a Quotation</h2>
              <input
                type="number"
                className="w-1/6 border-2 border-green-700 rounded-lg outline-none p-1"
                placeholder="10000"
              />
              <button className="w-fit">Submit</button>
              <p>kjvbjkdbncjfhvjkfhvjfvjfdv <br />
                kjvbjkdbncjfhvjkfhvjfvjfdv <br />
                kjvbjkdbncjfhvjkfhvjfvjfdv <br />
                kjvbjkdbncjfhvjkfhvjfvjfdv <br />
                kjvbjkdbncjfhvjkfhvjfvjfdv<br />
                kjvbjkdbncjfhvjkfhvjfvjfdv<br />
                kjvbjkdbncjfhvjkfhvjfvjfdv
              </p>
            </div>
          ) : (
            offers.map((offer) => (
              <div className="flex flex-col gap-2 w-full h-full items-start justify-start">
                <h2 className="font-bold text-2xl">Quotation</h2>
                <p className="w-full">offerID: {offer.postingID}</p>
                <p className="w-full">offerer: {offer.offererDisplay}</p>
                <p className="w-full">Price: {offer.amount}</p>
                <p className="w-full">Contact: {offer.offererContactInfo}</p>
                <p className="w-full">Status: {offer.status}</p>
              </div>
            ))
          )
        ) : (
          <Link href="/LoginPage">
            <button className="w-fit">Login to place a quotation</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectView;
