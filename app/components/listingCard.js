"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";

// parameters authorDisplay, title, coverImageURL, previewText, proposedPrice
const ListingCard = ({
  title,
  coverImageURL,
  previewText,
  proposedPrice,
  postingID,
}) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className=" text-black flex flex-col rounded-3xl bg-white w-[25%] min-w-64 h-fit drop-shadow-lg m-5 ">
      <img src={coverImageURL} className="w-full h-[55%] rounded-t-3xl" />
      <div className="flex flex-col gap-2 m-5 mt-2">
        <div className="text-[90%] font-lato font-bold">{title}</div>
        <div className="text-[80%] font-lato">{previewText}</div>
        <div className="text-[80%] font-lato font-bold">
          Quoted Price: {proposedPrice}
        </div>
        <Link
          href={`/Listings/${postingID}`}
          className="text-[90%] font-lato font-bold py-2 px-5 border-2 border-green-900 bg-green-50 w-fit rounded-lg"
        >
          Quote a Price
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
