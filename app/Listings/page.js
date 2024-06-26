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
    <div className=" h-full w-full overflow-auto p-10 flex flex-wrap justify-around items-center text-black">
      <div>
        Open {data.filter((posting) => posting.status == "open").length}
        {data
          .filter((posting) => posting.status == "open")
          .map((posting) => (
            <ListingCard
              title={posting.title}
              previewText={posting.preview}
              proposedPrice={posting.proposedPrice}
              coverImageURL={posting.coverImageURL}
              postingID={posting.postingID}
            />
          ))}
      </div>

      <div>
        Closed {data.filter((posting) => posting.status == "closed").length}
        {data
          .filter((posting) => posting.status == "closed")
          .map((posting) => (
            <ListingCard
              title={posting.title}
              previewText={posting.preview}
              proposedPrice={posting.proposedPrice}
              coverImageURL={posting.coverImageURL}
              postingID={posting.postingID}
            />
          ))}
      </div>
    </div>
  );
};

export default About;
