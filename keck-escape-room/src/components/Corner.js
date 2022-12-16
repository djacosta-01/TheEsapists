import React from 'react'
import JokeGenerator from './jokeAPI'

const Corner = () => {
  return (
    <div id="right-sidebar">
      <h4>You are standing in the corner.</h4>
      {<JokeGenerator />}
      <p className="links">
        <a id="next-link" href="couch">
          Next Area
        </a>
      </p>
    </div>
  )
}

export default Corner
