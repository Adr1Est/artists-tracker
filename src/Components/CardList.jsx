import Card from "./Card";
import { strategyWithAudio, strategyWithDateAndFollow } from "../strategies";
import { fetchDeezerArtist, getTopArtists } from "../infoApi";
import { useEffect, useState } from "react";
import { getTopArtistData } from "./Data";

const CardList = ({ listTitle }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setArtists(await getTopArtistData());
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>{listTitle}</h1>
      {artists.map((artist) => (
        <Card
          key={artist.name}
          name={artist.name}
          image={artist.deezerImage}
          renderVariable={strategyWithDateAndFollow}
          listeners={artist.listeners}
          tags={artist.tags?.tag?.map((t) => t.name).join(", ") || ""}
        />
      ))}
    </>
  );
};

export default CardList;
