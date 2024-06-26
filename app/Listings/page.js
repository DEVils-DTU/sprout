"use client";
import React, { useState, useEffect } from "react";
import ListingCard from "../components/listingCard";

const About = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/postings")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col p-10">

      <h1 className="text-black text-2xl font-bold">Open {"("}{data.filter((posting) => posting.status == "open").length}{")"}</h1>
      <div className=" h-full w-full overflow-auto flex flex-wrap justify-around items-center text-black">

        {data
          .filter((posting) => posting.status == "open")
          .map((posting) => (
            <ListingCard
              key={posting.postingID}
              title={posting.title}
              previewText={posting.preview}
              proposedPrice={posting.proposedPrice}
              coverImageURL={posting.coverImageURL}
              postingID={posting.postingID}
            />
          ))}
      </div>

      <h1 className="text-black text-2xl mt-10 font-bold"> Closed {"("}{data.filter((posting) => posting.status == "closed").length}{")"}</h1>
      <div className=" h-full w-full overflow-auto flex flex-wrap justify-around items-center text-black">

        {data
          .filter((posting) => posting.status == "closed")
          .map((posting) => (
            <ListingCard
              key={posting.postingID}
              title={posting.title}
              previewText={posting.preview}
              proposedPrice={posting.proposedPrice}
              coverImageURL={posting.coverImageURL}
              postingID={posting.postingID}
            />
          ))}
      </div>
    </div>
    // </div >
  );
};

export default About;
