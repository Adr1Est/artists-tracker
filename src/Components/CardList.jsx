import Card from "./Card";
import { strategyWithAudio, strategyWithDateAndFollow } from "../strategies";
import { fetchDeezerArtist, getTopArtists } from "../infoApi";
import { useEffect, useState } from "react";
import { getTopArtistData } from "./Data";
import "./Card.css"
import { strategyTopArtist } from "../strategies";

const CardList = ({strategy, title, tag }) => {
  return strategy({title, tag});
};

export default CardList;
