import { Searchbar } from "../SearchBar/Searchbar"
import './Nav.css'

export const Nav = ({ setCharacters, charactersArray }) => {
  return (
    <div className="search">
      <Searchbar 
        setCharacters={setCharacters}
        charactersArray={charactersArray}
      />
    </div>
  )
}