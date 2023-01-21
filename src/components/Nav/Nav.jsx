import { Searchbar } from "../SearchBar/Searchbar"
import './Nav.css'

export const Nav = ({ onSearch }) => {
  return (
    <div className="search">
      <Searchbar onSearch = {onSearch}/>
    </div>
  )
}