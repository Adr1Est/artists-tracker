import { useEffect, useState } from "react";
import { getTopArtistData, getTopTagData } from "./Components/Data";
import Card from "./Components/Card";

export const strategyWithDateAndFollow = ({ listeners}) => (
  <>
    <p className="white-text my-2">
      <i className="fa-solid fa-ear-listen"></i> <span></span>
      {listeners}
    </p>
    <button className="follow-button rounded-4">
      Follow <i className="fa-solid fa-heart"></i>
    </button>
  </>
);

export const strategyWithAudio = ({ audioSrc }) => (
  <audio controls>
    <source src={audioSrc} type="audio/mpeg" />Tu navegador no soporta audio.
  </audio>
);

export const strategyTopArtist = ({title}) =>{
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setArtists(await getTopArtistData());
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="m-5 bg-widget p-3 rounded-3">
      <h1 className="mx-2"><i className="fa-solid fa-fire"></i> <span></span>{title}</h1>
      <div className="d-flex p-3 gap-3 overflow-x-auto flex-nowrap scroll-container">
        {artists.map((artist) => (
          <Card
            key={artist.name}
            name={artist.name}
            image={artist.deezerImage}
            renderVariable={strategyWithDateAndFollow}
            listeners={artist.listeners}
            summary={artist.summary}
          />
        ))}
      </div>
    </div>
    </>
  );
}
export const strategyGenreTopArtist = ({title, tag}) =>{
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setArtists(await getTopTagData(tag));
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="m-5 bg-widget p-3 rounded-3">
      <h1 className="mx-2"><i className="fa-solid fa-fire"></i> <span></span>{title}</h1>
      <div className="d-flex p-3 gap-3 overflow-x-auto flex-nowrap scroll-container">
        {artists.map((artist) => (
          <Card
            key={artist.name}
            name={artist.name}
            image={artist.deezerImage}
            renderVariable={strategyWithDateAndFollow}
            listeners={artist.listeners}
            summary={artist.summary}
          />
        ))}
      </div>
    </div>
    </>
  );
}
