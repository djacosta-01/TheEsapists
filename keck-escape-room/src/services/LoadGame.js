import Game from '../components/Game'

export default function LoadGame({ games, setGame }) {
  return (
    <div id="game-loader">
      {/* Game Bar */}
      {!games
        ? 'No previous games'
        : games.map(game => (
            <p key={game.id} onClick={() => setGame(game)}>
              <Game game={game} />
            </p>
          ))}
    </div>
  )
}
