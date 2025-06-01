import {getTopArtists, fetchDeezerArtist, getTopArtistsByGenre } from "../infoApi";

export const getArtistData = async(name) =>{
    const data = await fetchLastFmArtist(name);
    const image = await (fetchDeezerArtist(name));
    return{
        ...data.artist, deezerImage: image?.picture_big || image?.picture_medium || ""
    };
}     

export const getTopArtistData = async() =>{
    const data = await getTopArtists();
    const dataWithImages = await Promise.all(
        data.map(async (artist) => {
        const deezerArtist = await fetchDeezerArtist(artist.name);
        return {
            ...artist,
            deezerImage: deezerArtist?.picture_big || deezerArtist?.picture_medium || "",
        };
        })
    );
    return dataWithImages;
}

export const getTopTagData=async(tag)=>{
const data = await getTopArtistsByGenre(tag);
    const dataWithImages = await Promise.all(
        data.map(async (artist) => {
        const deezerArtist = await fetchDeezerArtist(artist.name);
        return {
            ...artist,
            deezerImage: deezerArtist?.picture_big || deezerArtist?.picture_medium || "",
        };
        })
    );
    return dataWithImages;
}
      
      