export const strategyWithDateAndFollow = ({ date, tags }) => (
  <>
    <p>{tags}</p>
    <p>{date}</p>
    <button>Follow</button>
  </>
);

export const strategyWithAudio = ({ audioSrc }) => (
  <audio controls>
    <source src={audioSrc} type="audio/mpeg" />Tu navegador no soporta audio.
  </audio>
);
