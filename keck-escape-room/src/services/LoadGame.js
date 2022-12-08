export default function LoadGame({ games, setGame }) {
  return (
    <div id="game-loader">
      This is load game bar
      {!games
        ? "No previous games"
        : games.map((a) => (
            <p key={a.id} onClick={() => setGame(a)}>
              {a.name}
            </p>
          ))}
    </div>
  );
}
