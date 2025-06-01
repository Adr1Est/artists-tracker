const URL = 'https://api.deezer.com/search/artist?q=Architects';

const getArtist = async () => {
  try {
    const response = await fetch(URL, {
      method: 'GET',
    });

    const data = await response.json();
    return data;

  } catch (error) {
    console.log(`Error de búsqueda: ${error}`);
  }
}

(async () => {
  const grupo = await getArtist();
  console.log(grupo.data[0]);
  // console.log(grupo);
})();

export { getArtist }