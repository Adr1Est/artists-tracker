export const strategyWithDateAndFollow = ({ listeners, tags }) => (
  <>
    <p>{tags}</p>
    <p>{listeners}</p>
    <button>Follow</button>
  </>
);

export const strategyWithAudio = ({ audioSrc }) => (
  <audio controls>
    <source src={audioSrc} type="audio/mpeg" />Tu navegador no soporta audio.
  </audio>
);
