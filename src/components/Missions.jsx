import React from 'react'
import { useSelector } from 'react-redux'

const Missions = () => {
  const missions = useSelector(state => state.missions)

  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {missions.map(missions => (
          <li key={missions.id}>{missions.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Missions