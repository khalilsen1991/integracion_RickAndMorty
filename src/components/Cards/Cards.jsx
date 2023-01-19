import { useEffect, useState } from "react"
import characters from "../../data"
import './Cards.css'
import { SearchBar } from "../SearchBar/Searchbar"

export const Cards = () => {
  const [charactersArray, setCharacters] = useState([])

  useEffect(() => {
    setCharacters([
      ...charactersArray,
      characters
    ])
  }, [])
  
  if (charactersArray[0] && charactersArray[0].length > 0) {
    return (
      <>
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="test">
          {
            charactersArray[0].map((character, index) => {
              return (
                <div className="character" key={index}>
                  <p className="p">Name : {character.name}</p>
                  <img className="img" src={character.image} alt={character.name} />
                  <p className="p">Gender : {character.gender}</p>
                  <p className="p">Specie : {character.species}</p>
                </div>
              )
            })
          }
        </div>
      </>
    )
  } else {
    return (
      <h1>Characters not found</h1>
    )
  } 
  
}