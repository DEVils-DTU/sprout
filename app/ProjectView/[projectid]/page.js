"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { v4 as uuid } from "uuid";

const ProjectView = ({ params }) => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [postingData, setPostingData] = useState([]);
  const [offers, setOffers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [offerPrice, setOfferPrice] = useState("");
  const [offerName, setOfferName] = useState("");
  const [offerContact, setOfferContact] = useState("");
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

  const handleDelete = (e) => {
    e.preventDefault();
    if (!window.hive_keychain) {
      setError("Hive Keychain is not installed");
      return;
    }
    const my_keychain = window.hive_keychain;
    let jsondata = {
      app: "sprout/0.0.1",
      action: "delete_posting",
      postingID: params.projectid,
    };
    console.log(jsondata);
    my_keychain.requestCustomJson(
      username,
      "sproutapp",
      "Active",
      JSON.stringify(jsondata),
      "Delete a post",
      (response) => {
        console.log(response);
        window.location.href = "/Listings";
      }
    );
  };

  const handleCreateOffer = (e) => {
    e.preventDefault();
    if (!window.hive_keychain) {
      setError("Hive Keychain is not installed");
      return;
    }
    const my_keychain = window.hive_keychain;
    let jsondata = {
      app: "sprout/0.0.1",
      action: "create_offer",
      postingID: params.projectid,
      offerID: uuid(),
      offererDisplay: offerName,
      amount: offerPrice,
      offererContactInfo: offerContact,
    };
    console.log(jsondata);
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

  const handleOfferReply = (offerId, status) => {
    if (!window.hive_keychain) {
      setError("Hive Keychain is not installed");
      return;
    }
    const my_keychain = window.hive_keychain;
    let jsondata = {
      app: "sprout/0.0.1",
      action: "reply_to_offer",
      offerID: offerId,
      status: status,
    };

    my_keychain.requestCustomJson(
      username,
      "sproutapp",
      "Active",
      JSON.stringify(jsondata),
      "Reply to an offer",
      (response) => {
        console.log(response);
        window.location.href = "/Listings";
      }
    );
  };
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex h-full justify-evenly items-center w-full p-10">
      <img src={postingData.coverImageURL} className="w-2/5" />
      <div className="text-black w-3/5 h-full font-poppins p-5 flex flex-col justify-start gap-5">
        <div className="flex flex-col gap-0">
          <h1 className=" font-extrabold text-[3vw] underline">
            {postingData.title}
          </h1>
          <h2 className=" text-[1vw] italic">
            By {postingData.authorDisplay} <br />
          </h2>
        </div>

        <div className="flex text-justify justify-evenly w-[90%]">
          {postingData.text} <br />{" "}
        </div>

        {loggedIn && postingData.status == "open" ? (
          username != postingData.author ? (
            // false ? (
            offers.find((a) => a.offerer == username) ? (
              <div className="text-2xl h-full w-full p-4 font-bold mb-4 text-black">
                Hi <a href="/LoginPage" className="text-blue-600 hover:underline">{username}</a>! You have already placed an offer:{" "}
                {offers.find((a) => a.offerer == username).amount}
              </div>
            ) : (
              <div className="flex flex-col gap-2 w-full h-full items-start justify-start">
                <h2 className=" text-xl font-bold  drop-shadow-2xl rounded-xl">
                  Place a Quotation
                </h2>
                <form onSubmit={handleCreateOffer} className="w-full flex gap-2">
                  <input
                    type="text"
                    className="w-1/6 border-b-2 outline-none p-1"
                    required
                    placeholder="10000"
                    onChange={(e) => setOfferPrice(e.target.value)}
                  /> <br />
                  <input
                    type="text"
                    className="w-1/6 border-b-2 outline-none p-1"
                    required
                    placeholder="Name"
                    onChange={(e) => setOfferName(e.target.value)}
                  /> <br />
                  <input
                    type="text"
                    className="w-1/6 border-b-2 outline-none p-1"
                    required
                    placeholder="ContactInfo"
                    onChange={(e) => setOfferContact(e.target.value)}
                  /> <br />
                  <button
                    className="text-[90%] font-lato font-bold p-2 border-2 border-green-900 bg-green-50 w-fit rounded-lg"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )
          ) : (
            offers.map((offer, i) => (
              <div key={i} className="flex flex-col gap-2 w-full h-full items-start justify-start">
                <h2 className="font-bold text-2xl">Offer #{i + 1}</h2>
                {/* <p className="w-full">offerID: {offer.offerID}</p> */}
                <p className="w-full">Investor Name: {offer.offererDisplay}</p>
                <p className="w-full">Offer: {offer.amount}</p>
                {/* <p className="w-full">Contact: {offer.offererContactInfo}</p> */}
                {offer.status == "open" ? (
                  <div>
                    <button
                      className="text-white font-bold bg-green-600 p-2 rounded-lg mr-2"
                      onClick={() =>
                        handleOfferReply(offer.offerID, "accepted")
                      }
                    >
                      Accept
                    </button>
                    <button
                      className="text-white font-bold bg-red-600 p-2 rounded-lg"
                      onClick={() =>
                        handleOfferReply(offer.offerID, "rejected")
                      }
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <p>Status: <span className={`w-full font-bold
                  ${offer.status == "accepted" ? "text-green-600" : "text-red-600"}
                    `} >{offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}</span></p>
                )}
              </div>
            ))
          )
        ) : loggedIn ? (
          ""
        ) : (
          <Link href="/LoginPage">
            <div className="text-2xl h-full w-full p-4 font-bold mb-4 text-black"> Please <a href="/LoginPage" className="text-blue-600 hover:underline">login</a> to create an offer. </div>
          </Link>
        )}




        {loggedIn &&
          username == postingData.author &&
          postingData.status == "open" ? (
          <button className="text-red-600 font-extrabold pb-10" onClick={handleDelete}>
            Close Project Listing
          </button>
        ) : (
          ""
        )}
      </div>
    </div >
  );
};

export default ProjectView;
