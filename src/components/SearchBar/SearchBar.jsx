import { useState } from 'react'
import './Searchbar.css'

export  const Searchbar = ({ onSearch }) => {
  const [characterId, setCharacterId] = useState({ id: 0})

  const handleChange = (e) => {
    setCharacterId({
      ...characterId,
      id: e.target.value,
    })
  }

  return (
    <div className="search-container">
      <input type="number" className="input" placeholder='Insert ID of character' onChange={handleChange} value={characterId.number}/>
      <button className="button-search" onClick={() => onSearch(characterId)}>Search</button>
    </div>
  )
}