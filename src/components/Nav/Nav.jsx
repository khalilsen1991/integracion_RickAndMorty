import { Searchbar } from "../SearchBar/Searchbar"
import './Nav.css'

export const Nav = (props) => {
  return (
    <div className="search">
      <Searchbar onSearch = {props.onSearch}/>
    </div>
  )
}