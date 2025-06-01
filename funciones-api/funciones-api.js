const URL = 'https://corsproxy.io/?https://api.deezer.com/search/artist?q=Architects';

const getArtist = async () => {
  try {
    const response = await fetch(URL, {
      method: 'GET'
    });

    const data = await response.json();
    return data;

  } catch (error) {
    console.log(`⚠️ Error => ${error}`);
  }
}

export { getArtist }