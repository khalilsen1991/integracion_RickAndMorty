import { Searchbar } from "../SearchBar/Searchbar"
import './Nav.css'

export const Nav = ({ onSearch, setCharacters, charactersArray }) => {
  return (
    <div className="search">
      <Searchbar 
        onSearch = {onSearch} 
        setCharacters={setCharacters}
        charactersArray={charactersArray}
      />
    </div>
  )
}