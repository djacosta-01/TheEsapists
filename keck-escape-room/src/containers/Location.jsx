import React from 'react'
import JokeGenerator from '../components/jokeAPI'

const Location = props => {
  const { mainText, enableJoke, enableAlert } = props

  return (
    <div id="right-sidebar">
      <h4>You are standing in the corner.</h4>
      {enableJoke && <JokeGenerator />}
      {enableAlert && <button onClick={() => alert('A frog')}>Look at whiteboard</button>}
      <p className="links">
        <a id="next-link" href="couch">
          Next Area
        </a>
      </p>
    </div>
  )
}

export default Location
