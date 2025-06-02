import {getTopArtists, fetchDeezerArtist, getTopArtistsByGenre, fetchLastFmArtist } from "../infoApi";

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
        const deezerResult = await fetchDeezerArtist(artist.name);
        const deezerArtist = deezerResult?.[0];
        const lastFmData = await fetchLastFmArtist(artist.name);
        let summary = lastFmData?.artist?.bio?.summary || "";
        summary = summary.replace(/<a[^>]*>.*?<\/a>/gi, "").trim();
        return {
            ...artist,
            deezerImage: deezerArtist?.picture_big || deezerArtist?.picture_medium || "",
            summary,
        };
        })
    );
    return dataWithImages;
}

export const getTopTagData=async(tag)=>{
const data = await getTopArtistsByGenre(tag);
    const dataWithImages = await Promise.all(
        data.map(async (artist) => {
        const deezerResult = await fetchDeezerArtist(artist.name);
        const deezerArtist = deezerResult?.[0];
        const lastFmData = await fetchLastFmArtist(artist.name);
        let summary = lastFmData?.artist?.bio?.summary || "";
        summary = summary.replace(/<a[^>]*>.*?<\/a>/gi, "").trim();
        return {
            ...artist,
            deezerImage: deezerArtist?.picture_big || deezerArtist?.picture_medium || "",
            summary,
        };
        })
    );
    return dataWithImages;
}
      
      