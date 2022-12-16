import { DateTime } from 'luxon'

export default function Game({ game }) {
  const dt = DateTime.fromSeconds(game.date.seconds)

  return (
    <div id="game-container">
      {!game ? (
        <p>No game selected</p>
      ) : (
        <section>
          <h2>{game.name}</h2>
          <p id="date">{`Created: ${dt.toLocaleString(DateTime.DATE_SHORT)}`}</p>
          <p id="clues">{`Clues found: ${game.clues}`}</p>
        </section>
      )}
    </div>
  )
}
