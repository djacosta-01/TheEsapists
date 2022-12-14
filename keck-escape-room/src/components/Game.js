export default function Game({ game }) {
  return (
    <div id="game-container">
      This the game component
      {!game ? (
        <p>No game selected</p>
      ) : (
        <section>
          <h2>{game.name}</h2>
          <p id="date">{`Created: ${game.date}`}</p>
          <p id="clues">{`Clues found: ${game.clues}`}</p>
        </section>
      )}
    </div>
  );
}
