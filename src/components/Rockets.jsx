import React from 'react'
import { useSelector } from 'react-redux'

const Rockets = () => {
  const rockets = useSelector(state => state.rockets)

  return (
    <div>
      <h1>Rockets</h1>
      <ul>
        {rockets.map(rocket => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Rockets
