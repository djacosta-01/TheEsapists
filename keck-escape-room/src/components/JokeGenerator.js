import { useState } from 'react'
import Button from './Button'

const URL =
  'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

const JokeGenerator = () => {
  const [joke, setJoke] = useState('')

  const fetchApi = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setJoke(data.joke))
  }

  return (
    <div id="joke-container">
      {joke === '' ? (
        <Button callApi={fetchApi} />
      ) : (
        <p>
          <span>Julian's cursed thought of the day:</span>
          {joke}
        </p>
      )}
    </div>
  )
}

export default JokeGenerator
