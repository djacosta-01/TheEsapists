import React from 'react'
import JokeGenerator from '../components/JokeGenerator'

const Location = props => {
  const { mainText, enableJoke, enableAlert, alertText, nextLink } = props

  return (
    <div id="right-sidebar">
      <h4>{mainText}</h4>
      {enableJoke && <JokeGenerator />}
      {enableAlert && <button onClick={() => alert(alertText)}>Look at whiteboard</button>}
      <p className="links">
        <a id="next-link" href={nextLink}>
          Next Area
        </a>
      </p>
    </div>
  )
}

export default Location
